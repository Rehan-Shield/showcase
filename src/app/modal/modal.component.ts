import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() open!: boolean;
  @Output() close = new EventEmitter();

  showModal = false;
  setActive = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnChanges() {
    if (this.open) {
      this.openModal();
    } else {
      this.closeModal();
    }
  }

  openModal() {
    this.showModal = true;

    setTimeout(() => {
      this.setActive = true;
    }, 0);
  }

  closeModal() {
    this.setActive = false;

    setTimeout(() => {
      this.showModal = false;
    }, 200);
  }

  onClose() {
    this.close.emit();
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }
}
