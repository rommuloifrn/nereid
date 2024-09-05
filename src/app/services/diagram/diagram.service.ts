import { afterRender, Injectable } from '@angular/core';
import mermaid from 'mermaid';
import { Diagram } from '../../diagram';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  currentDiagram: Diagram = {"classes":[]}//{"classes":this.classList}

  AddClass(title: string): boolean {
    let uniqueTitle: boolean = true;
    this.currentDiagram.classes.forEach(c => {
      if (c.title == title) uniqueTitle = false
    });
    
    if (uniqueTitle == true && title != "") {
      this.currentDiagram.classes.push({"title":title,"attributes":[]});
      this.saveDiagram();

        console.log("xibmas");
        const target: HTMLElement = document.getElementById("mermid")!
        mermaid.render(
          "mermid",
          target.innerText,
          target
        )

      return true;
    }
    return false;
  }

  deleteClass(title: string) {
    this.currentDiagram.classes.forEach((c, index) => {
      if (c.title == title) {
        this.currentDiagram.classes.splice(index, 1); 
        this.saveDiagram();
      } 
    });
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
