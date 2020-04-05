import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo } from '../constants/todo';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl = 'http://jsonplaceholder.typicode.com/todos';
  limit = '?_limit=10';

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todoUrl}${this.limit}`);

  }

  toggle(todo: Todo): Observable<any>{
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTask(todo: Todo): Observable<Todo>{
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo>{
   return this.http.post<Todo>(this.todoUrl, todo, httpOptions);
  }
}
