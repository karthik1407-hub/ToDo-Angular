import { Component, inject, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // constructor(private todoService: TodoService) {}
  // todos = this.todoService.getTodos();
  todoService = inject(TodoService);
  todos = this.todoService.getTodos();

  add(text: string){
    this.todoService.addTodo(text);
    this.todos = this.todoService.getTodos();
  }
}