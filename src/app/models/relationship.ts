import { DiagramElement } from "../interfaces/element";
import { Class } from "./class";

export class Relationship implements DiagramElement {
    id: number;
    leftPartner: Class;
    leftSymbol: string;
    rightPartner: Class;
    rightSymbol: string;

    constructor(id:number, leftPartner: Class, leftSymbol:string, rightPartner: Class, rightSymbol: string) {
        this.id = id;
        this.leftPartner = leftPartner;
        this.leftSymbol = leftSymbol;
        this.rightPartner = rightPartner;
        this.rightSymbol = rightSymbol;
    }
}