import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailsTodoListeComponent } from './module/todo/composant/details-todo-liste/details-todo-liste.component';
import { DisplayTodoPipe } from './module/todo/pipe/display-todo.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DetailsTodoListeComponent,
    DisplayTodoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
