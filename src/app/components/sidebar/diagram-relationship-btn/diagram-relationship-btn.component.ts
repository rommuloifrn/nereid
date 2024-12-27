import { Component, inject, Input } from '@angular/core';
import { Relationship } from '../../../relationship';
import { DiagramService } from '../../../services/diagram/diagram.service';

@Component({
  selector: 'app-diagram-relationship-btn',
  standalone: true,
  imports: [],
  templateUrl: './diagram-relationship-btn.component.html',
  styleUrl: './diagram-relationship-btn.component.css'
})
export class DiagramRelationshipBtnComponent {
  @Input({required: true}) relationship: Relationship = {
    id:0,
    leftPartner:{"title":"ximbas", "attributes":[]},
    rightPartner:{"title":"ximbas", "attributes":[]},
    leftSymbol:"",
    rightSymbol:""
  };

  ds: DiagramService = inject(DiagramService);

  remove(id: number) {
    this.ds.removeRelationship(id);
  }
}
