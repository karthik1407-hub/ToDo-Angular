import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todoItem.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos : TodoItem[] = [
    {
      title: 'Items'
    },
    {
      title: 'ToDo'
    },
    {
      title: 'In Progress'
    },
    {
      title: 'Completed'
    }
  ];

  getTodos(): TodoItem[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const todo: TodoItem = { title };
    this.todos.push(todo);
  }

}
