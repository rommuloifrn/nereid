import { Injectable } from '@angular/core';
import { Diagram } from '../../models/diagram';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  loadDiagram(): Diagram {
        let savedDiagram: Diagram = JSON.parse(localStorage.getItem("diagram")!);

        if (savedDiagram === null) return new Diagram([], []);
        else return savedDiagram;
  }

  saveDiagram(d: Diagram) {
    let stringDiagram = JSON.stringify(d);
    localStorage.setItem("diagram", stringDiagram);
  }

  constructor() { }
}
