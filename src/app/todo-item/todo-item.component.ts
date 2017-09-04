import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../shared/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()  todo: Todo;
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  togle(){
    this.todo.completed =!this.todo.completed;
  }

  onDelete(){
    this.delete.emit(this.todo);
  }

}
