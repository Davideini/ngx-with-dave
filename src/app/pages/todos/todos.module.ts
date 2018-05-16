import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [CommonModule, TodosRoutingModule],
  declarations: [TodosComponent, TodoComponent]
})
export class TodosModule {}
