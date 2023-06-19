import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appShow]',
})
export class ShowDirective {
  @Input('appShow') show = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    console.log(this.el.nativeElement.clientHeight);
    console.log(this.el.nativeElement.scrollHeight);
    console.log(this.el.nativeElement.offsetHeight);
  }

  ngOnChanges() {
    if (this.show) {
      this.el.nativeElement.style.height = `${
        this.el.nativeElement.scrollHeight - 16
      }px`;
    } else {
      this.el.nativeElement.style.height = `125px`;
    }
  }
}
