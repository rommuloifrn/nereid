import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Class } from '../../models/class';
import { Relationship } from '../../models/relationship';
import { DiagramService } from '../../services/diagram/diagram.service';
import { CreateClassBtnComponent } from './create-class-btn/create-class-btn.component';
import { CreateRelationshipBtnComponent } from './create-relationship-btn/create-relationship-btn.component';
import { DiagramClassBtnComponent } from './diagram-class-btn/diagram-class-btn.component';
import { DiagramRelationshipBtnComponent } from './diagram-relationship-btn/diagram-relationship-btn.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    CreateClassBtnComponent,
    DiagramClassBtnComponent,
    DiagramRelationshipBtnComponent,
    CreateRelationshipBtnComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  ds: DiagramService = inject(DiagramService)

  classes: Class[] = this.ds.currentDiagram.classes //this.ds.getDiagramFromLocalStorage().classes
  relationships: Relationship[] = this.ds.currentDiagram.relationships
  ximbas = this.ds.bs.subscribe(()=>{
    this.classes = this.ds.currentDiagram.classes
    this.relationships = this.ds.currentDiagram.relationships
    console.log("situationships!");
    
  })

  showRelationships: boolean = false;

  ngOnInit(): void {
    setTimeout(()=>{this.classes=this.ds.currentDiagram.classes}, 100) 
  }

  toggleRelationships() {
    this.showRelationships = !this.showRelationships;
  }

}
