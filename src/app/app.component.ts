import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from "guid-typescript";
import { Todo } from 'src/models/todo.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todos : Todo[] = [
 
      new Todo(Guid.create(), 'Wash Car', new Date('2020-09-12'), false),
      new Todo(Guid.create(), 'Buy Groceries', new Date('2020-09-28'),false),

  ]

  onSubmit(form: NgForm){
    let todo= new Todo(Guid.create(),form.value.title,form.value.deadline, false);
    this.todos.push(todo);
    form.resetForm();
  }

  onComplete(id: Guid){
    let todo = this.todos.filter(x=>x.id ===id)[0];
    todo.isComplete = true;
  }

  onDelete(id: Guid){
    let todo = this.todos.filter(x=>x.id ===id)[0];
    let index = this.todos.indexOf(todo,0);
    if(index >- 1){
      this.todos.splice(index,1);
    }
  }

  constructor(private router: Router){}
}

