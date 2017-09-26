import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Note} from '../note'
import {ApiService} from '../api.service'

@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.css']
})
export class NotesAddComponent implements OnInit {

  newNote = new Note();
  @Output() createNewNoteEvent = new EventEmitter();

  constructor(private _apiService: ApiService) { }
  create(){
    //sending the newNote to the Parent(app.ts)
    this.createNewNoteEvent.emit(this.newNote);
    //to reset the new info everytime user inputs
    this.newNote = new Note();
  }
  ngOnInit() {
    // this.getNotes();
  }

}
