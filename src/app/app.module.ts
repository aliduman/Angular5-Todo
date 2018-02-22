import { ToDoDataService } from './services/to-do-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToDoComponent } from './to-do/to-do.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ToDoDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
