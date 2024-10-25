import { Component, Input } from '@angular/core';
import { Class } from '../../../class';

@Component({
  selector: 'app-diagram-class-btn',
  standalone: true,
  imports: [],
  templateUrl: './diagram-class-btn.component.html',
  styleUrl: './diagram-class-btn.component.css'
})
export class DiagramClassBtnComponent {
  @Input({required: true}) class: Class = new Class('');
}
