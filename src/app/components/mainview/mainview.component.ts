import { CommonModule } from '@angular/common';
import { afterNextRender, Component, inject } from '@angular/core';
import { Class } from '../../class';
import { DiagramService } from '../../services/diagram/diagram.service';

@Component({
  selector: 'app-mainview',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './mainview.component.html',
  styleUrl: './mainview.component.css'
})
export class MainviewComponent {

  ds: DiagramService = inject(DiagramService)

  async openingTheShop() {
    await this.ds.loadDiagramFromStorage();
    setTimeout(() => {
      this.ds.updateDiagramRender(); 
    });
  }

  //@Input({required: true}) classes!: Class[];
  classes: Class[] = this.ds.currentDiagram.classes
  constructor(){
    afterNextRender(()=>{ // essa merda é necessaria mesmo se nao tiver nada dentro... https://stackoverflow.com/questions/60156296/problems-with-mermaid-integration-in-angular
      read: () => {
        //void mermaid.init()
        console.log("ximbas");
        
      }

      setTimeout(() => {
        this.openingTheShop()
      }, 100);
      console.log(this.ds.currentDiagram);
      
    })
  }
  
}
