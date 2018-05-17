import {
  Directive,
  HostListener,
  HostBinding,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { DragNDropService } from './drag-n-drop.service';

@Directive({
  selector: '[appDragNDrop]'
})
export class DragNDropDirective {
  @Input() appDragNDrop: RegExp;

  @Output() filesAdd = new EventEmitter<File[]>(true);

  @HostBinding('class.over') classOver = false;

  constructor(private dragNDropService: DragNDropService) {}

  @HostListener('dragleave', ['$event'])
  onDragleave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.classOver = false;
  }

  @HostListener('dragenter', ['$event'])
  onDragenter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.classOver = true;
  }

  @HostListener('dragover', ['$event'])
  onDragover(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.classOver = true;
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.classOver = false;

    let files = this.dragNDropService.toFilesArray(event.dataTransfer.files);

    files =
      (this.appDragNDrop &&
        this.dragNDropService.reject(files, this.appDragNDrop)) ||
      files;

    this.filesAdd.emit(files);
  }
}
