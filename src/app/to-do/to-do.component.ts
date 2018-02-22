import {ToDoDataService} from '../services/to-do-data.service';
import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-to-do',
    templateUrl: './to-do.component.html',
    styleUrls: ['./to-do.component.css']
})

export class ToDoComponent implements OnInit {
    todos: Array<any> = [];
    newTodo: any;
    storageData: any;
    title: any;
    complete: any;
    someProperty = '';

    constructor(private todoData: ToDoDataService) {
    }

    ngOnInit() {
        this.someProperty = this.todoData.myTodo();
        this.storageData = this.todoData.getLocalStorage();
        this.todos = JSON.parse(this.storageData);
    }

    onKey(event: any) { // without type info
        if (event.keyCode === 13) {
            this.addTodo();
        }
    }

    addTodo(): void {
        if (this.title !== '' && this.title !== undefined) {
            this.newTodo = {
                title: this.title, complete: false
            };
            this.todos.push(this.newTodo);
            this.todoData.setLocalStorage(JSON.stringify(this.todos));
            this.title = '';
        }
    }

    removeTodo(i) {
        this.todos.splice(i, 1);
        this.todoData.setLocalStorage(JSON.stringify(this.todos));
    }

    completeTodo(i, state) {
        if (state === true) {
            this.todos.forEach((item, index) => {
                if (index === i) {
                    item.complete = false;
                }
            });
        } else {
            this.todos.forEach((item, index) => {
                if (index === i) {
                    item.complete = true;
                }
            });
        }
        this.todoData.setLocalStorage(JSON.stringify(this.todos));
    }

    filterActive() {
        this.todos = JSON.parse(this.todoData.getLocalStorage());
        const filterData = [];
        this.todos.forEach((item) => {
            if (item.complete === false) {
                filterData.push(item);
            }
        });
        this.todos = filterData;
    }

    filterAll() {
        this.todos = JSON.parse(this.todoData.getLocalStorage());
    }

    filterComplete() {
        this.todos = JSON.parse(this.todoData.getLocalStorage());
        const filterData = [];
        this.todos.forEach((item) => {
            if (item.complete === true) {
                filterData.push(item);
            }
        });
        this.todos = filterData;
    }
}
