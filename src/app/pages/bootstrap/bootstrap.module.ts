import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap.component';

@NgModule({
  imports: [
    CommonModule,
    BootstrapRoutingModule
  ],
  declarations: [BootstrapComponent]
})
export class BootstrapModule { }
