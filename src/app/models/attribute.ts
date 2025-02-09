import { DiagramElement } from "../interfaces/element";

export class Attribute implements DiagramElement {
    title: string
    id: number;

    constructor(id: number, title:string) {
        this.id = id;
        this.title = title;
    }
    
}