import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
  imports: [CommonModule, TodosRoutingModule],
  declarations: [TodosComponent]
})
export class TodosModule {}
