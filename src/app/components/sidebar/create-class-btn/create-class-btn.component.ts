import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import "toastify-js/src/toastify.css";
import { ToastMaker } from '../../../../toastify';
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

  classTitle: string = "";

  create() {
    if (this.diagramService.createClass(this.classTitle)) this.classTitle = "";
    else {
      ToastMaker.spitToast('Hey, a class with that name was already created.')
    }
  }
}
