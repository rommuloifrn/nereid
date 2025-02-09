import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastMaker } from '../../../../toastify';
import { Attribute } from '../../../models/attribute';
import { Class } from '../../../models/class';
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
  @Input({required: true}) class: Class = {'id':0,'title':'', 'attributes': []};
  ds: DiagramService = inject(DiagramService);

  attTitle = "";
  editing: boolean = false;
  editingValue = ''

  expanded: boolean = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  addAttribute() {
    this.ds.createAttribute(this.class.id, new Attribute(this.attTitle))
    this.attTitle = "";
  }

  flipEdit() {
    this.editing = !this.editing;
  }

  submitEdit(classId: number, editingValue: string) {
    if (this.ds.updateClass(classId, editingValue))
      this.flipEdit()
    else ToastMaker.spitToast("Hey, a class with that name already exists.")
  }
}
