import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
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
      Toastify({
        text: "A class with that name was already been created",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #9333ea, #fa766b)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }
  }
}
