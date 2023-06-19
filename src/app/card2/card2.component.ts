import { Component } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss'],
})
export class Card2Component {
  coverages = new Array(20).fill(0);

  showCoverages = false;
}
