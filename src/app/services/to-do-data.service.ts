import { Injectable } from '@angular/core';
import {debug} from "util";
@Injectable()
export class ToDoDataService {

  todos: any = [
    {
      title: 'Drink tea', complete: false
    },
    {
      title: 'work fast', complete: false
    },
    {
      title: 'test', complete: true
    },
  ];

  constructor() {}


  myTodo() {
    return 'This is my data, man!';
  }

  setLocalStorage(data) {
    localStorage.setItem('_todos', data);
  }

  getLocalStorage() {
    const storage = localStorage.getItem('_todos');
    if (storage === '' || storage === undefined) {
      return '[]';
    }else {
      return storage;
    }
  }

}
