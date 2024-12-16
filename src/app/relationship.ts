import { Class } from "./class";

export class Relationship {
    leftPartner: Class;
    leftSymbol: string;
    rightPartner: Class;
    rightSymbol: string;

    constructor(leftPartner: Class, leftSymbol:string, rightPartner: Class, rightSymbol: string) {
        this.leftPartner = leftPartner;
        this.leftSymbol = leftSymbol;
        this.rightPartner = rightPartner;
        this.rightSymbol = rightSymbol;
    }
}