import { CommonModule } from '@angular/common';
import { afterNextRender, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import mermaid from 'mermaid';
import { Class } from '../../class';

@Component({
  selector: 'app-mainview',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './mainview.component.html',
  styleUrl: './mainview.component.css'
})
export class MainviewComponent implements OnChanges{ //https://stackoverflow.com/questions/60156296/problems-with-mermaid-integration-in-angular

  @Input({required: true}) classes!: Class[];

  constructor(){
    afterNextRender(()=>{
      read: () => {
        void mermaid.init()
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
      // afterNextRender(()=>{
      //   let componentId = "mermid";
      //   let component = document.getElementById(componentId)?.innerHTML;
      //   let diagram = component != null ? component : "";
      //   let container = document.getElementById(componentId)!;
      //   mermaid.render(componentId, diagram, container)
      // })



      // if (typeof document != undefined) {
      //   console.log("xibmas");
      //   const target: HTMLElement = document.getElementById("mermid")!
      //   mermaid.render(
      //     "mermid",
      //     target.innerText,
      //     target
      //   )
      // }
  }
  
}
