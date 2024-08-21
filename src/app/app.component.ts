import { AfterContentInit, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Class } from './class';
import { MainviewComponent } from './components/mainview/mainview.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DiagramService } from './services/diagram/diagram.service';
import { Diagram } from './diagram';

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

  diagramService: DiagramService = inject(DiagramService)
  classesFromService = this.diagramService.currentDiagram.classes
}
