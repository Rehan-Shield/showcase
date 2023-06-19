import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss'],
})
export class Card1Component {
  showModel = false;

  loop = new Array(10).fill(0);

  @ViewChild('products') products!: ElementRef;
  @ViewChild('left') leftArrow!: MatIcon;
  @ViewChild('right') rightArrow!: MatIcon;

  ngAfterViewInit() {
    this.leftArrow._elementRef.nativeElement.addEventListener('click', () => {
      this.products.nativeElement.scrollLeft -= (this.loop.length / 3) * 300;
    });

    this.rightArrow._elementRef.nativeElement.addEventListener('click', () => {
      this.products.nativeElement.scrollLeft += (this.loop.length / 3) * 300;
    });
  }
}
