import { Component, Input, signal } from '@angular/core';


@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
@Input() title:string="";

//Declaration of isComplete as a signal
isComplete = signal<boolean>(false);
isNotComplete = signal<boolean>(true);

//Disable button when the task is completed
buttonDisable(){
  return this.isComplete();
}

//Status of the task
staus: Status = Status.ToDo;

toggleCompleted(){
  this.isComplete.update((currentValue)=>!currentValue);
  this.staus = this.isComplete() ? Status.Completed : Status.ToDo;
}

toggleIsNotCompleted(){
  this.isNotComplete.set(false);  
  this.staus = Status.Completed;
}
 
inputValue: string = '';
displayValue: string = '';

  updateDisplay() {
    this.displayValue = this.inputValue;
  }
}

enum Status {
  ToDo = "ToDo",
  InProgress = "In Progress",
  Completed = "Completed"
}
