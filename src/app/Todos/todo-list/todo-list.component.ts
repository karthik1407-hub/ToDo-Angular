import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
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
}
interface TodoItem{
title: string;
}