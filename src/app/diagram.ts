import { Class } from "./class";
import { DiagramDirection } from "./direction";

export class Diagram {
    classes: Class[]

    constructor(classes: Class[]) {
        this.classes = classes;
    }
}