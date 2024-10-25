import { Attribute } from "./attribute";

export class Class {
    title: string
    attributes: Attribute[]

    constructor(title:string){
        this.title = title;
        this.attributes = [];
    }
}