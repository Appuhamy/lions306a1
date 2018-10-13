import { Component,OnInit,Renderer, ViewChild, Input } from '@angular/core';

/**
 * Generated class for the AccordionAccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion-accordion',
  templateUrl: 'accordion-accordion.html'
})
export class AccordionAccordionComponent  implements OnInit{
  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;
  icon: string = "arrow-forward";
  text: string;

  constructor(public renderer: Renderer) {
    console.log('Hello AccordionAccordionComponent Component');
    this.text = 'Hello World';
  }
  
  ngOnInit() {
    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");

    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }
}
