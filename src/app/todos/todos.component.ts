import { Component, OnInit } from '@angular/core';
import {Todo } from '../constants/todo';
import {TodoService} from '../Service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos()
    .subscribe(todos => this.todos = todos);
  }

  deleteTodo(todo: Todo) {
    console.log('deleted');
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.unshift(todo);
    });
  }
}
