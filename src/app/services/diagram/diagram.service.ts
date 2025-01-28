import { afterRender, inject, Injectable } from '@angular/core';
import mermaid from 'mermaid';
import { Subject } from 'rxjs';
import { Attribute } from '../../models/attribute';
import { Class } from '../../models/class';
import { Diagram } from '../../models/diagram';
import { Relationship } from '../../models/relationship';
import { StorageService } from '../storage/storage.service';
import { TranspilerService } from '../transpiler/transpiler.service';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  currentDiagram: Diagram = {
    "classes":[], 
    "relationships":[
      {
        id:0,
        leftPartner:{"title":"ximbas", "attributes":[]},
        rightPartner:{"title":"ximbas", "attributes":[]},
        leftSymbol:"",
        rightSymbol:""
      }
    ],
    "nextRelationshipId":0
  }
  bs: Subject<string> = new Subject();
  //nextRelationshipId = 0;

  ss: StorageService = inject(StorageService);
  ts: TranspilerService = inject(TranspilerService);

  initializeMermaid() {
    mermaid.initialize({startOnLoad: false, class: {useMaxWidth:false}, theme:'dark'});
  }

  // Class

  createClass(title: string): boolean {
    
    if (this.classTitleIsValid(title)) {
      this.currentDiagram.classes.push({"title":title,"attributes":[]});
      this.saveAndRender();

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
      if (c.title == title) 
        this.currentDiagram.classes.splice(index, 1); 
    });

    this.currentDiagram.relationships.forEach((r, index)=>{
      if ((r.leftPartner.title == title) || (r.rightPartner.title == title)) 
        this.currentDiagram.relationships.splice(index, 1);
    })

    this.saveAndRender();
  }

  createAttribute(classtitle: string, att: Attribute) {
    this.currentDiagram.classes.forEach((c, index) => {
      if (c.title == classtitle) {
        c.attributes.push(att);
      } 
    });
    this.saveAndRender();
  }


  // Relationship

  AddRelationship(leftPartner: Class, rightPartner: Class, leftSymbol: string, rightSymbol: string) {
    let r: Relationship = new Relationship(this.currentDiagram.nextRelationshipId++, leftPartner, leftSymbol, rightPartner, rightSymbol);

    this.currentDiagram.relationships.push(
      r
    );
    this.saveAndRender();
    
  }

  removeRelationship(id: number) {
    let target = this.currentDiagram.relationships.filter((r)=>r.id == id)
    console.log(target);
    console.log(this.currentDiagram.relationships);
    
    
    let spliceIndex = this.currentDiagram.relationships.indexOf(target[0]);
    this.currentDiagram.relationships.splice(spliceIndex, 1);

    this.saveAndRender();
  }



  

  

  saveAndRender() {
    this.ss.saveDiagram(this.currentDiagram);
    this.updateDiagramRender()
  }

  async updateDiagramRender(){ // TODO: lógica pra caso nao haja diagrama no localStorage
    if (this.areWeOnBrowser()) {
      const target: HTMLElement = document.getElementById("mermid")!
      let currentDiagramString: string = this.ts.objectToMermaid(this.currentDiagram)
    
      //target.innerHTML = '';
      
      mermaid.init({'theme':'dark'})
      const {svg} = await mermaid.render("graphDiv", currentDiagramString)
      target.innerHTML = svg;
      
      const mysvg: HTMLElement = document.getElementById("graphDiv")!

      mysvg.style.removeProperty('maxWidth');
      

      this.bs.next("");
    }
  }

  constructor() {
    afterRender(()=>{
      if (this.areWeOnBrowser()) {
        this.currentDiagram = this.ss.loadDiagram();
      }
    })
  }

  areWeOnBrowser() {
    return typeof document != 'undefined';
  }

}
