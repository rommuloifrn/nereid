import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Class } from '../../models/class';
import { Relationship } from '../../models/relationship';
import { DiagramService } from '../../services/diagram/diagram.service';
import { CreateClassBtnComponent } from './create-class-btn/create-class-btn.component';
import { CreateRelationshipBtnComponent } from './create-relationship-btn/create-relationship-btn.component';
import { DiagramClassBtnComponent } from './diagram-class-btn/diagram-class-btn.component';
import { DiagramRelationshipBtnComponent } from './diagram-relationship-btn/diagram-relationship-btn.component';
import { Diagram } from '../../models/diagram';
import { DiagramElement } from '../../interfaces/element';

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
export class SidebarComponent {
  ds: DiagramService = inject(DiagramService)

  showRelationships: boolean = false;

  trackById(index: number, e: DiagramElement): number {
    return e.id;
  }

  toggleRelationships() {
    this.showRelationships = !this.showRelationships;
  }

}
