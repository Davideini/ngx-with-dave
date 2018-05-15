import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [CommonModule, PagesRoutingModule, LayoutModule],
  declarations: [PagesComponent],
  exports: [PagesComponent]
})
export class PagesModule {}
