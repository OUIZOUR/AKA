import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoDto } from 'src/app/models/todo-dto';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  getTodoListe(): Observable<TodoDto[]>{

    return this.http.get<TodoDto[]>('http://localhost:8080/api/todo');
  }
}
