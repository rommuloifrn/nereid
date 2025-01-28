import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Class } from '../../../models/class';
import { DiagramService } from '../../../services/diagram/diagram.service';

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
  leftSymbol!: string;
  rightSymbol!: string;



  ngOnInit(): void {
    setTimeout(()=>{this.classes=this.ds.currentDiagram.classes}, 100) 
  }

  ximbas = this.ds.bs.subscribe(()=>{
    this.classes = this.ds.currentDiagram.classes
  })

  create() {
    this.ds.AddRelationship(
      this.leftPartner, this.rightPartner, this.leftSymbol, this.rightSymbol
    )
    this.leftSymbol = this.rightSymbol = "";
  }
}
