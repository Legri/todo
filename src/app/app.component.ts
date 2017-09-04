import { Component } from '@angular/core';

class Todo{
  
  constructor(public  title:string,
              public completed :boolean = false ){

  }
}

const todos= [
  {
    title:'javascript1',
    completed:true
  },
  {
    title:'javascript2',
    completed:false
  },
  {
    title:'javascript3',
    completed:true
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todos: Todo[]= todos;
  newTodoTitle:string = '';

 create(){
   
  let todo:Todo=new Todo(this.newTodoTitle);
  this.todos.push(todo);
  this.newTodoTitle="";
 }

  togle(todo:any){
   todo.completed=!todo.completed;
  }

  delete(todo:any){
    let index = this.todos.indexOf(todo);
    if (index>-1){
      this.todos.splice(index,1);
    }
  }
}
