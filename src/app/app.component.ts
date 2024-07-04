import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainviewComponent } from './components/mainview/mainview.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopbarComponent,
    SidebarComponent,
    MainviewComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nereid';
}
