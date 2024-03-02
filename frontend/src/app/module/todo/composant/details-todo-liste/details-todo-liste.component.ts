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

  // todo1: TodoDto = {
  //   id:1,
  //   title: 'menage',
  //   description: 'je dois faire le menage',
  //   creationDate: new Date(),
  //   deadline: new Date('2024-03-03')
  // }


}
