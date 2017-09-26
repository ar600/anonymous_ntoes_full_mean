import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotesAddComponent } from './notes-add/notes-add.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { HttpModule } from '@angular/http'
import {ApiService} from './api.service';
import { NotesEditComponent } from './notes-edit/notes-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    NotesAddComponent,
    NotesListComponent,
    NotesEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
