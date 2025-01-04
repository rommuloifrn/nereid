import { Class } from "./class";
import { DiagramDirection } from "./direction";

export class Diagram {
    classes: Class[];
    direction: DiagramDirection;

    constructor(classes: Class[]) {
        this.classes = classes;
        this.direction = new DiagramDirection();
    }
}