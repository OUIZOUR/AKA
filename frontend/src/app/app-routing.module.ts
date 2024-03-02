import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsTodoListeComponent } from './module/todo/composant/details-todo-liste/details-todo-liste.component';

const routes: Routes = [
  {
    path: 'todo-liste',
    component: DetailsTodoListeComponent,
  },
  {
    path: '',
    redirectTo: 'todo-liste',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'todo-liste',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
