import { afterRender, inject, Injectable } from '@angular/core';
import mermaid from 'mermaid';
import { Subject } from 'rxjs';
import { DiagramElement } from '../../interfaces/element';
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

  currentDiagram: Diagram = new Diagram();
  bs: Subject<string> = new Subject();
  //nextRelationshipId = 0;

  ss: StorageService = inject(StorageService);
  ts: TranspilerService = inject(TranspilerService);

  debug: boolean = false;

  initializeMermaid() {
    mermaid.initialize({startOnLoad: false, class: {useMaxWidth:false}, theme:'dark'});
  }



  // Class

  createClass(title: string): boolean {
    
    if (this.classTitleIsValid(title)) {
      this.currentDiagram.classes.push(
        new Class(title, this.currentDiagram.nextClassId++)
      );
      this.saveAndRender();

      return true;
    }
    
    return false;
  }

  updateClass(classId: number, title: string): boolean {
    if (this.classTitleIsValid(title)) {
      this.currentDiagram.classes.forEach((c, index) => {
        if (c.id == classId)  {
          c.title = title;
  
          this.currentDiagram.relationships.forEach(
            (r)=> {
              if (r.leftPartner.id == c.id) r.leftPartner = c;
              if (r.rightPartner.id == c.id) r.rightPartner = c;
            }
          )
        }
      });
      
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

  getClassById(id: number): Class | void {
    let result;
    this.currentDiagram.classes.forEach((c) =>{
      if (c.id == id) result = c;
    })
    return result;
  }
  
  // fragment this thing in the future
  deleteClass(classId: number) {
    this.currentDiagram.classes.forEach((c, index) => {
      if (c.id == classId) 
        this.currentDiagram.classes.splice(index, 1); 
    });

    this.currentDiagram.relationships.forEach((r, index)=>{
      if ((r.leftPartner.id == classId) || (r.rightPartner.id == classId)) 
        this.currentDiagram.relationships.splice(index, 1);
    })

    this.saveAndRender();
  }

  createAttribute(classId: number, att: Attribute) {
    this.currentDiagram.classes.forEach((c, index) => {
      if (c.id == classId) {
        c.attributes.push(att);
      } 
    });
    this.saveAndRender();
  }


  // Relationship

  AddRelationship(leftPartner: Class, rightPartner: Class, leftSymbol: string, rightSymbol: string) {
    this.currentDiagram.relationships.push(
      new Relationship(
        this.currentDiagram.nextRelationshipId++, 
        leftPartner, 
        leftSymbol, 
        rightPartner, 
        rightSymbol
      )
    );
    this.saveAndRender();    
  }

  AddRelationshipAlt(leftId: number, leftSymbol: string, rightSymbol: string, rightId: number) {
    this.currentDiagram.relationships.push(
      new Relationship(
        this.currentDiagram.nextRelationshipId++, 
        this.getClassById(leftId)!, 
        leftSymbol, 
        this.getClassById(rightId)!, 
        rightSymbol
      )
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



  trackById(index: number, e: DiagramElement): number {
    return e.id;
  }

  

  saveAndRender() {
    this.ss.saveDiagram(this.currentDiagram);
    this.updateDiagramRender();
    if (this.debug) console.log(this.currentDiagram);
    
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
