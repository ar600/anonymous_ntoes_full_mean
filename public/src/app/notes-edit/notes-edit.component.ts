import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Note} from '../note';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent implements OnInit {
  @Input() note;
  @Output() updateNoteEvent = new EventEmitter();

  noteEdit : Note = new Note();

  constructor() { }

  update(){
    this.noteEdit.editable = false;
    this.updateNoteEvent.emit(this.noteEdit);

  }
  ngOnInit() {
    Object.assign(this.noteEdit, this.note);

  }

}
