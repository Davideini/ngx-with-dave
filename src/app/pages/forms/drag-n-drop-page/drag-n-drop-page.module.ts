import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragNDropPageComponent } from './drag-n-drop-page.component';
import { DragNDropPageRoutingModule } from './drag-n-drop-page-routing.module';
import { DragNDropModule } from '../../../design/drag-n-drop/drag-n-drop.module';

@NgModule({
  imports: [CommonModule, DragNDropPageRoutingModule, DragNDropModule],
  declarations: [DragNDropPageComponent]
})
export class DragNDropPageModule {}
