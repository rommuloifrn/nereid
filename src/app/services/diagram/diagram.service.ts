import { Injectable } from '@angular/core';
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

  currentDiagram: Diagram = this.getDiagram() //{"classes":this.classList}

  create() {
    this.currentDiagram.classes.push({"title":"ximbas","attributes":[]});
    this.saveDiagram();
  }

  saveDiagram() {
    let stringDiagram = JSON.stringify(this.currentDiagram);
    localStorage.setItem("diagram", stringDiagram);
  }

  getDiagram() {
    let diagram: string | null = "";
    if (localStorage.getItem("diagram") != null) diagram = localStorage.getItem("diagram");
    if (diagram == null) diagram = "";
    return JSON.parse(diagram);
  }

  constructor() { }
}
