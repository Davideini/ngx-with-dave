import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragNDrop]'
})
export class DragNDropDirective {
  constructor() {}

  @HostListener('dragleave', ['$event'])
  onDragleave(event) {
    console.log('dragleave', event);
  }

  @HostListener('dragenter', ['$event'])
  onDragenter(event) {
    console.log('dragenter', event);
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    console.log('drop', event);
  }
}
