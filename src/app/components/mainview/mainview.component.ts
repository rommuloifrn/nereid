import { afterNextRender, Component, ElementRef, inject, OnChanges, ViewChild } from '@angular/core';
import mermaid from 'mermaid';
import { DiagramService } from '../../services/diagram/diagram.service';
import { Diagram } from 'mermaid/dist/Diagram';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainview',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './mainview.component.html',
  styleUrl: './mainview.component.css'
})
export class MainviewComponent{ //https://stackoverflow.com/questions/60156296/problems-with-mermaid-integration-in-angular

  diagramService: DiagramService = inject(DiagramService)
  classes = this.diagramService.currentDiagram.classes

  constructor(){
    afterNextRender(()=>{
      read: () => {
        void mermaid.init()
      }
    })
  }
}
