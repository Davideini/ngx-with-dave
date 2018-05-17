import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragNDropPageComponent } from './drag-n-drop-page.component';
import { DragNDropPageRoutingModule } from './drag-n-drop-page-routing.module';

@NgModule({
  imports: [CommonModule, DragNDropPageRoutingModule],
  declarations: [DragNDropPageComponent]
})
export class DragNDropPageModule {}
