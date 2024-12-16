import { Component, inject } from '@angular/core';
import { DiagramService } from '../../../services/diagram/diagram.service';
import { CommonModule, NgFor } from '@angular/common';
import { Class } from '../../../class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-relationship-btn',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './create-relationship-btn.component.html',
  styleUrl: './create-relationship-btn.component.css'
})
export class CreateRelationshipBtnComponent {
  ds: DiagramService = inject(DiagramService);
  classes: Class[] = this.ds.currentDiagram.classes
  leftPartner!: Class
  rightPartner!: Class

  ngOnInit(): void {
    setTimeout(()=>{this.classes=this.ds.currentDiagram.classes}, 100) 
  }

  create() {
    this.ds.AddRelationship(
      this.leftPartner, this.rightPartner
    )
  }
}
