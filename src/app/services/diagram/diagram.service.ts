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
      this.updateDiagramRender()

      return true;
    }
    return false;
  }

  updateDiagramRender(){
    const target: HTMLElement = document.getElementById("mermid")!
    let currentDiagramString: string = this.generateDiagram(this.currentDiagram)
    
    mermaid.render("mermid", currentDiagramString, target)
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
        body = body.concat("String: ", a.title, "\n");
      }
    }
    body.concat("eita manézao")
    var final = title.concat(body);
    console.log(final);
    return final;
  }

  loadDiagramFromStorage() {
    if (typeof document != undefined) {
      this.currentDiagram = JSON.parse(localStorage.getItem("diagram")!);
    }
  }

  constructor() {
    afterRender(()=>{
      this.loadDiagramFromStorage();
    })
  }

  
}
