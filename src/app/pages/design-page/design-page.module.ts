import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignPageRoutingModule } from './design-page-routing.module';
import { DesignPageComponent } from './design-page.component';

@NgModule({
  imports: [
    CommonModule,
    DesignPageRoutingModule
  ],
  declarations: [DesignPageComponent]
})
export class DesignPageModule { }
