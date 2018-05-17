import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.scss']
})
export class DragNDropComponent implements OnInit {
  @Input() files: File[];

  constructor() {}

  ngOnInit() {}
}
