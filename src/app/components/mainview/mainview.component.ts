import { afterNextRender, Component, ElementRef, inject, Input, OnChanges, ViewChild } from '@angular/core';
import mermaid from 'mermaid';
import { DiagramService } from '../../services/diagram/diagram.service';
import { Diagram } from 'mermaid/dist/Diagram';
import { CommonModule } from '@angular/common';
import { Class } from '../../class';

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

  @Input({required: true}) classes!: Class[];

  constructor(){
    afterNextRender(()=>{
      read: () => {
        void mermaid.init()
      }
    })
  }
}
