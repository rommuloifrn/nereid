import { Attribute } from "./attribute";

export class Class {
    id: number;
    title: string
    attributes: Attribute[]

    constructor(title:string, id:number){
        this.id = id;
        this.title = title;
        this.attributes = [];
    }
}