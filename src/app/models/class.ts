import { DiagramElement } from "../interfaces/element";
import { Attribute } from "./attribute";

export class Class implements DiagramElement {
    id: number;
    title: string
    attributes: Attribute[]

    constructor(title:string, id:number){
        this.id = id;
        this.title = title;
        this.attributes = [];
    }
}