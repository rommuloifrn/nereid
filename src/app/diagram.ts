import { Class } from "./class";

export class Diagram {
    classes: Class[]

    constructor(classes: Class[]) {
        this.classes = classes;
    }
}