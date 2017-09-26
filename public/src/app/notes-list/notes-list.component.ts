import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Note} from '../note'
import {ApiService} from '../api.service'

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  @Input() notes;
  @Output() destroyNoteEvent = new EventEmitter();
  @Output() updateNoteEvent = new EventEmitter();

  constructor(private _apiService: ApiService) { }

  destroy(note: Note){
    this.destroyNoteEvent.emit(note);

  }

  update(note){
    this.updateNoteEvent.emit(note);
  }

  ngOnInit() {
    console.log("ngOnInit notes-list ", this.notes);
    this._apiService.getNotes();
  }

}
