import { CommonModule } from '@angular/common';
import { afterNextRender, Component, inject } from '@angular/core';
import mermaid from 'mermaid';
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
  classes: Class[] = this.ds.currentDiagram.classes

  constructor(){
    afterNextRender(() =>{
      read: ()=> {
        void mermaid.init({class:{useMaxWidth:false}, theme:"forest"})
      }
      mermaid.mermaidAPI.setConfig({})
      setTimeout(() => {
        this.ds.updateDiagramRender();
      }, 100); // isso aqui é basicamente pra dar tempo até o diagrama ser carregado do localStorage. Não é definitivo.
      
    })
    
  }
  
}
