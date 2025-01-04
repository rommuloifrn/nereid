import { Class } from "./class";
import { Relationship } from "./relationship";

export class Diagram {
    classes: Class[];
    relationships: Relationship[];
    nextRelationshipId: number;

    constructor(classes?: Class[], relationships?: Relationship[]) {
        if (classes && relationships) {
            this.classes = classes;
            this.relationships = relationships;
        } else {
            this.classes = [];
            this.relationships = [];
        }
        this.nextRelationshipId = 0;
    }
}