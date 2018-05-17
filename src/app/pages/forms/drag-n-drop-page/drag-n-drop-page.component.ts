import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-n-drop-page',
  templateUrl: './drag-n-drop-page.component.html',
  styleUrls: ['./drag-n-drop-page.component.scss']
})
export class DragNDropPageComponent implements OnInit {
  files: File[] = [];

  ignore: RegExp = /\.json/i;

  constructor() {}

  ngOnInit() {}

  onFilesAdd(files: File[]) {
    this.files = files;
  }
}
