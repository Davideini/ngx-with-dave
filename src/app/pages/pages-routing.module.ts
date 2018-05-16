import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule' },
  { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' },
  {
    path: 'modals',
    loadChildren: 'app/pages/modals/modals.module#ModalsModule'
  },
  { path: 'todos', loadChildren: 'app/pages/todos/todos.module#TodosModule' }
  // {
  //   path: 'material',
  //   loadChildren: 'app/pages/material/material.module#MaterialModule'
  // },
  // {
  //   path: 'bootstrap',
  //   loadChildren: 'app/pages/bootstrap/bootstrap.module#BootstrapModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
