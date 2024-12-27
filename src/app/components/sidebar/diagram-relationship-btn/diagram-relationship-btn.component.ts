import { Component, Input } from '@angular/core';
import { Relationship } from '../../../relationship';

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
}
