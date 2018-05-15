import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarModule } from './topbar/topbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  imports: [TopbarModule, SidebarModule, FooterModule],
  exports: [TopbarModule, SidebarModule, FooterModule]
})
export class LayoutModule {}
