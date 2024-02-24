import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageToDoComponent } from './module/todo/page-to-do/page-to-do.component';

const routes: Routes = [
  {
    path: 'todo',
    component: PageToDoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
