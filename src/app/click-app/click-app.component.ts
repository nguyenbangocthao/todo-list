import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-click-app',
	templateUrl: './click-app.component.html',
	styleUrls: [ './click-app.component.css' ]
})
export class ClickAppComponent implements OnInit {
	@Input() todo;
	@Output() delete: EventEmitter<string> = new EventEmitter();
	check: boolean;
	constructor() {}

	ngOnInit(): void {}
	change() {
		this.todo.check = !this.todo.check;
	}
	deleteToDo() {
		this.delete.emit('');
	}
}
