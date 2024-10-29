import { afterRender, Injectable } from '@angular/core';
import mermaid from 'mermaid';
import { Attribute } from '../../attribute';
import { Diagram } from '../../diagram';
import { Class } from '../../class';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  currentDiagram: Diagram = {"classes":[]}//{"classes":this.classList}

  AddClass(title: string): boolean {
    
    if (this.classTitleIsValid(title)) {
      this.currentDiagram.classes.push({"title":title,"attributes":[]});
      this.saveDiagram();
      this.updateDiagramRender()

      return true;
    }
    
    return false;
  }

  classTitleIsValid(title: string): boolean {
    for (let x of this.currentDiagram.classes)
      if (x.title == title) return false;

    if (title == "") return false;

    return true;
  }

  deleteClass(title: string) {
    this.currentDiagram.classes.forEach((c, index) => {
      if (c.title == title) {
        this.currentDiagram.classes.splice(index, 1); 
        this.saveDiagram();
        this.updateDiagramRender()
      } 
    });
  }

  addAtributeOnClass(classtitle: string, att: Attribute) {
    this.currentDiagram.classes.forEach((c, index) => {
      if (c.title == classtitle) {
        //c.attributes.push(att);
        this.saveDiagram();
        this.updateDiagramRender()
      } 
    });
  }

  updateDiagramRender(){
    const target: HTMLElement = document.getElementById("mermid")!
    let currentDiagramString: string = this.generateDiagram(this.currentDiagram)
    
    //target.innerHTML = '';

    mermaid.render("mermid", currentDiagramString, target)
  }



  saveDiagram() {
    let stringDiagram = JSON.stringify(this.currentDiagram);
    localStorage.setItem("diagram", stringDiagram);
  }

  generateDiagram(d: Diagram){
    let title = ''//"---\n title: EXAMPLETITLE\n ---\n"
    let body: string = "classDiagram\n"

    for (var c of d.classes) {
      body = body.concat("class ", c.title, "\n");
      for(var a of c.attributes) {
        body = body.concat(c.title.concat(" : "), a.title, "\n");
      }
    }
    //body.concat("eita manézao")
    var final = title.concat(body);
    console.log(final);
    return final;
  }

  constructor() {
    afterRender(()=>{
      //this.loadDiagramFromStorage();
    })
  }

  loadDiagramFromStorage() {
    if (typeof document != undefined) { // TODO: lógica pra caso o diagrama salvo seja nulo!!!!!!!
      this.currentDiagram = JSON.parse(localStorage.getItem("diagram")!);
    }
  }

}
