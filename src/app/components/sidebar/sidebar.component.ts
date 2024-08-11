import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DiagramService } from '../../services/diagram/diagram.service';
import { CreateClassBtnComponent } from './create-class-btn/create-class-btn.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    CreateClassBtnComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  diagramService: DiagramService = inject(DiagramService)
}
