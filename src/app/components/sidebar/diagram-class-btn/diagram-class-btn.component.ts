import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Attribute } from '../../../attribute';
import { Class } from '../../../class';
import { DiagramService } from '../../../services/diagram/diagram.service';

@Component({
  selector: 'app-diagram-class-btn',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    FormsModule
  ],
  templateUrl: './diagram-class-btn.component.html',
  styleUrl: './diagram-class-btn.component.css'
})
export class DiagramClassBtnComponent {
  @Input({required: true}) class: Class = {'title':'', 'attributes': []};
  ds: DiagramService = inject(DiagramService);

  attTitle = "";

  addAttribute() {
    //this.class.attributes.push(new Attribute(this.attTitle));
    this.ds.addAtributeOnClass(this.class.title, new Attribute(this.attTitle))
    this.attTitle = "";
    this.ds.saveDiagram(); this.ds.updateDiagramRender()

    
  }
}
