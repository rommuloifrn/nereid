import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Class } from '../../class';
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
  @Input() classes: Class[] = []
}
