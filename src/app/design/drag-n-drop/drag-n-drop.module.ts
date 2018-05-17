import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragNDropComponent } from './drag-n-drop.component';
import { DragNDropDirective } from './drag-n-drop.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DragNDropComponent, DragNDropDirective],
  exports: [DragNDropComponent, DragNDropDirective]
})
export class DragNDropModule {}
