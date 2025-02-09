import { Class } from "./class";
import { Relationship } from "./relationship";

export class Diagram {
    classes: Class[];
    relationships: Relationship[];
    nextRelationshipId: number;
    nextClassId: number;
    nextAttributeId: number;

    constructor(classes?: Class[], relationships?: Relationship[]) {
        if (classes && relationships) {
            this.classes = classes;
            this.relationships = relationships;
        } else {
            this.classes = [];
            this.relationships = [];
        }
        this.nextRelationshipId = 0;
        this.nextClassId = 0;
        this.nextAttributeId = 0;
    }

    updateClasss(classId: number, title: string): void {
        this.classes.forEach((c, index) => {
          if (c.id == classId) 
            c.title = title;
        });
    
        console.log("-------------------------");
        
        console.log(this);
        
      }
    printa() {
        //console.log(this);
        
    }
}