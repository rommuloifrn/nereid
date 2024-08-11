import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiagramService } from '../../../services/diagram/diagram.service';

@Component({
  selector: 'app-create-class-btn',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-class-btn.component.html',
  styleUrl: './create-class-btn.component.css'
})
export class CreateClassBtnComponent {

  diagramService: DiagramService = inject(DiagramService);

  classTitle = "";

  create() {
    if (this.diagramService.AddClass(this.classTitle)) this.classTitle = "";;
  }
}
