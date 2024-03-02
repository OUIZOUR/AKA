import { Component, OnInit } from '@angular/core';
import { TodoDto } from 'src/app/models/todo-dto';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-details-todo-liste',
  templateUrl: './details-todo-liste.component.html',
  styleUrls: ['./details-todo-liste.component.scss']
})
export class DetailsTodoListeComponent implements OnInit {
  todoListe: TodoDto[] = [];

  constructor(private todoService: TodoService){

  }
  ngOnInit(): void {
    this.todoService.getTodoListe().subscribe(todoListe => {
      this.todoListe = todoListe;
    })
  }


}
