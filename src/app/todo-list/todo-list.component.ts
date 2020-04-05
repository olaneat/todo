import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../constants/todo';
import {TodoService} from '../Service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() t: Todo;
  @Output() deleteTodo: EventEmitter<Todo> =  new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
}

setClasses(){
  const classes = {
    todo: true,
    'is-complete': this.t.completed
  };
  return classes;
}

onToggle(todo){
  console.log('toggled');
  this.todoService.toggle(todo)
  .subscribe(todo => console.log(todo));
}

onDelete(todo) {
  this.todoService.deleteTask(todo).subscribe();
  this.deleteTodo.emit(todo);
}

}
