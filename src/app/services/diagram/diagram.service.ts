import { afterRender, Injectable } from '@angular/core';
import mermaid from 'mermaid';
import { Subject } from 'rxjs';
import { Attribute } from '../../attribute';
import { Class } from '../../class';
import { Diagram } from '../../diagram';
import { Relationship } from '../../relationship';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  currentDiagram: Diagram = {"classes":[], "relationships":[{
    id:0,
    leftPartner:{"title":"ximbas", "attributes":[]},
    rightPartner:{"title":"ximbas", "attributes":[]},
    leftSymbol:"",
    rightSymbol:""
  }]}
  bs: Subject<string> = new Subject();
  lastRelationshipIdUsed = 0;

  initializeMermaid() {
    mermaid.initialize({startOnLoad: false, class: {useMaxWidth:false}, theme:'dark'});
  }

  AddClass(title: string): boolean {
    
    if (this.classTitleIsValid(title)) {
      this.currentDiagram.classes.push({"title":title,"attributes":[]});
      this.saveDiagram();
      this.updateDiagramRender();

      return true;
    }
    
    return false;
  }

  AddRelationship(leftPartner: Class, rightPartner: Class) {
    let r: Relationship = new Relationship(this.lastRelationshipIdUsed++, leftPartner, "", rightPartner, "");
    this.currentDiagram.relationships.push(
      r
    );
    this.saveDiagram();
    this.updateDiagramRender();
    console.log(r.id);
    
  }

  classTitleIsValid(title: string): boolean {
    for (let x of this.currentDiagram.classes)
      if (x.title == title) return false;

    if (title == "") return false;

    return true;
  }

  deleteClass(title: string) {
    this.currentDiagram.classes.forEach((c, index) => {
      if (c.title == title) 
        this.currentDiagram.classes.splice(index, 1); 
    });

    this.currentDiagram.relationships.forEach((r, index)=>{
      if ((r.leftPartner.title == title) || (r.rightPartner.title = title)) 
        this.currentDiagram.relationships.splice(index, 1);
    })

    this.saveDiagram();
    this.updateDiagramRender()
  }

  addAtributeOnClass(classtitle: string, att: Attribute) {
    this.currentDiagram.classes.forEach((c, index) => {
      if (c.title == classtitle) {
        c.attributes.push(att);
        this.saveDiagram();
        this.updateDiagramRender()
      } 
    });
  }

  async updateDiagramRender(){ // TODO: lógica pra caso nao haja diagrama no localStorage
    if (this.areWeOnBrowser()) {
      const target: HTMLElement = document.getElementById("mermid")!
      let currentDiagramString: string = this.generateDiagram(this.currentDiagram)
    
      //target.innerHTML = '';
      
      mermaid.init({'theme':'dark'})
      const {svg} = await mermaid.render("graphDiv", currentDiagramString)
      target.innerHTML = svg;
      
      const mysvg: HTMLElement = document.getElementById("graphDiv")!

      mysvg.style.removeProperty('maxWidth');
      

      this.bs.next("");
    }
  }



  saveDiagram() {
    let stringDiagram = JSON.stringify(this.currentDiagram);
    localStorage.setItem("diagram", stringDiagram);
  }

  generateDiagram(d: Diagram){
    let title = ''//"---\n title: EXAMPLETITLE\n ---\n"
    let body: string = "classDiagram\ndirection DT\n";

    for (var r of d.relationships) {
      body = body.concat(r.leftPartner.title, " ", " -- ", " ", r.rightPartner.title, "\n");
    }

    for (var c of d.classes) {
      body = body.concat("class ", c.title, "\n");
      for(var a of c.attributes) {
        body = body.concat(c.title.concat(" : "), a.title, "\n");
      }
    }
    
    var final = title.concat(body);
    console.log(final);
    return final;
  }

  constructor() {
    afterRender(()=>{
      this.loadDiagramFromStorage();
    })
  }

  loadDiagramFromStorage() {
    if (this.areWeOnBrowser()) {
      let savedDiagram: Diagram = JSON.parse(localStorage.getItem("diagram")!);
      if (savedDiagram === null) this.currentDiagram = new Diagram([], []);
      else this.currentDiagram = savedDiagram;
    }
  }

  areWeOnBrowser() {
    return typeof document != 'undefined';
  }

}
