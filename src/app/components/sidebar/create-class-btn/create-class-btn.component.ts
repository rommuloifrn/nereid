import { Component, inject } from '@angular/core';
import { DiagramService } from '../../../services/diagram/diagram.service';

@Component({
  selector: 'app-create-class-btn',
  standalone: true,
  imports: [],
  templateUrl: './create-class-btn.component.html',
  styleUrl: './create-class-btn.component.css'
})
export class CreateClassBtnComponent {

  diagramService: DiagramService = inject(DiagramService);

  create() {
    this.diagramService.create();
  }
}
