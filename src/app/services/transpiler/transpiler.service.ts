import { Injectable } from '@angular/core';
import { Diagram } from '../../models/diagram';

@Injectable({
  providedIn: 'root'
})
export class TranspilerService {

  objectToMermaid(d: Diagram): string {
    let title = ''//"---\n title: EXAMPLETITLE\n ---\n"
    let body: string = "classDiagram\ndirection DT\n";

    for (var r of d.relationships) {
      body = body.concat(
        r.leftPartner.title, 
        ("\"").concat(r.leftSymbol).concat("\""), 
        " -- ", ("\"").concat(r.rightSymbol).concat("\""), 
        r.rightPartner.title, "\n"
      );
    }

    for (var c of d.classes) {
      body = body.concat("class ", c.title, "\n");
      for(var a of c.attributes) {
        body = body.concat(c.title.concat(" : "), a.title, "\n");
      }
    }
    
    var final = title.concat(body);
    console.log(final);
    return final;
  }

  // mermaidToObject(): Diagram {
    
  // }

  constructor() { }
}
