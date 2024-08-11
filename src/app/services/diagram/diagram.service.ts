import { afterRender, Injectable } from '@angular/core';
import { Diagram } from '../../diagram';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  currentDiagram: Diagram = {"classes":[]}//{"classes":this.classList}

  create() {
    this.currentDiagram.classes.push({"title":"ximbas","attributes":[]});
    this.saveDiagram();
  }

  saveDiagram() {
    let stringDiagram = JSON.stringify(this.currentDiagram);
    localStorage.setItem("diagram", stringDiagram);
  }

  constructor() {
    afterRender(()=>{
      let diagram: string | null = "";
      if (localStorage.getItem("diagram") != null) diagram = localStorage.getItem("diagram");
      if (diagram == null) diagram = "";
      this.currentDiagram = JSON.parse(diagram);
    })
  }

  
}
