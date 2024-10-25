import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Class } from '../../class';
import { DiagramService } from '../../services/diagram/diagram.service';
import { CreateClassBtnComponent } from './create-class-btn/create-class-btn.component';
import { DiagramClassBtnComponent } from './diagram-class-btn/diagram-class-btn.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    CreateClassBtnComponent,
    DiagramClassBtnComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  ds: DiagramService = inject(DiagramService)

  classes: Class[] = this.ds.currentDiagram.classes
}
