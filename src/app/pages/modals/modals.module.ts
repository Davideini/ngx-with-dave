import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalsRoutingModule } from './modals-routing.module';
import { ModalsComponent } from './modals.component';

@NgModule({
  imports: [
    CommonModule,
    ModalsRoutingModule
  ],
  declarations: [ModalsComponent]
})
export class ModalsModule { }
