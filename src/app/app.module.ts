import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClickAppComponent } from './click-app/click-app.component';
import { ChangeAppComponent } from './change-app/change-app.component';

@NgModule({
	declarations: [ AppComponent, ClickAppComponent, ChangeAppComponent ],
	imports: [ BrowserModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
