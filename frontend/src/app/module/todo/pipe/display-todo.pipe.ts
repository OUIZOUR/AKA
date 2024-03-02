import { Pipe, PipeTransform } from '@angular/core';
import { TodoDto } from 'src/app/models/todo-dto';

@Pipe({
  name: 'appDisplayTodo'
})
export class DisplayTodoPipe implements PipeTransform {

  transform(todo: TodoDto) {
    if(!todo){
      throw Error ('todo vide');
    }
    return `${todo.title} : ${todo.description} | créé le  ${todo.creationDate} | deadline ${todo.deadline}`;
  }

}
