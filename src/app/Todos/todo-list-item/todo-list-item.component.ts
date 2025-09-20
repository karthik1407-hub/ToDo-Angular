import { Component, Input, signal } from '@angular/core';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
isHighlighted =false;
@Input() title:string="";
item(){
  document.getElementById('todo-item');
}  
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
  
  this.isHighlighted=!this.isHighlighted;
}

displayValue= signal<string>(" ");

updateDisplay(event: KeyboardEvent) {
  const inputElement = event.target as HTMLInputElement;
  this.displayValue.set(inputElement.value);
}



}

enum Status {
  ToDo = "ToDo",
  InProgress = "In Progress",
  Completed = "Completed"
}
