import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';

const routes: Routes = [
  { path: '', component: FormsComponent },
  {
    path: 'drag-n-drop',
    loadChildren:
      'app/pages/forms/drag-n-drop-page/drag-n-drop-page.module#DragNDropPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
