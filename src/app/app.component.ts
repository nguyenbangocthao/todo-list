import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	value;
	toDoList = [];

	ngOnInit() {}
	constructor() {}
	todoList() {
		if (this.value != '') {
			this.toDoList.push({ value: this.value, check: false });
			this.value = '';
		}
	}
	deleteToDoList(event, index) {
		console.log(event);
		this.toDoList.splice(index, 1);
	}
}
