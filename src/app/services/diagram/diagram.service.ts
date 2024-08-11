import { afterRender, Injectable } from '@angular/core';
import { Class } from "../../class";
import { Diagram } from '../../diagram';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {
  classList:Class[] = [
    {
      "title":"Animal",
      "attributes":[
        {
          "attributeName":"ximbas"
        }
      ]
    },
    {
      "title":"Hunter",
      "attributes":[]
    },
    {
      "title":"Plant",
      "attributes":[]
    }
  ]

  currentDiagram: Diagram = {"classes":[]}//{"classes":this.classList}
  classes: Class[] = []

  create() {
    this.currentDiagram.classes.push({"title":"ximbas","attributes":[]});
    this.saveDiagram();

    this.classes.push({"title":"ximbas","attributes":[]})
    this.saveClasses();
  }

  saveDiagram() {
    let stringDiagram = JSON.stringify(this.currentDiagram);
    localStorage.setItem("diagram", stringDiagram);
  }

  saveClasses() {
    let stringClasses = JSON.stringify(this.classes);
    localStorage.setItem("classes", stringClasses);
  }

  get() {
    let diagram: string | null = "";
    if (localStorage.getItem("diagram") != null) diagram = localStorage.getItem("diagram");
    if (diagram == null) diagram = "";
    this.currentDiagram = JSON.parse(diagram);
    console.log("lgoaassssss");
    console.log("diagram:");
    
    console.log(this.currentDiagram);
    return this.currentDiagram;
  }

  constructor() {
    afterRender(()=>{
      let diagram: string | null = "";
      if (localStorage.getItem("diagram") != null) diagram = localStorage.getItem("diagram");
      if (diagram == null) diagram = "";
      this.currentDiagram = JSON.parse(diagram);
      console.log("lgoaassssss");
      console.log("diagram:");
      
      console.log(this.currentDiagram);

      let classes: string | null = "";
      if (localStorage.getItem("classes") != null) classes = localStorage.getItem("classes");
      if (classes == null) classes = "";
      this.classes = JSON.parse(classes);
      
    })
  }

  
}
