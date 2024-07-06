import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Class } from '../../class';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() classes: Class[] = []
}
