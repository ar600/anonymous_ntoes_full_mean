import { Component, OnInit } from '@angular/core';
import {Note} from './note'
import {ApiService} from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  notes : Note[] = [
    // new Note("1","Ali is here"),
    // new Note("2","David is here"),
    // new Note("3","Mike is here")
  ];
  // note = new Note();
    constructor(private _apiService: ApiService) { }

    create(note : Note){
      this._apiService.create(note).subscribe(status => this.getNotes());
      // this.notes.push(note);
    }

    destroy(note : Note){
      this._apiService.destroy(note).subscribe(status => this.getNotes());
      // const idx = this.notes.indexOf(note);
      // this.notes.splice(idx,1);
    }

    update(note : Note){
      this._apiService.update(note).subscribe(status => this.getNotes());
      // const idx = this.notes.indexOf(note.original);
      // this.notes[idx] = note.edited;

    }

    getNotes(){
      this._apiService.getNotes().subscribe(notes => this.notes=notes)
    }

    ngOnInit() {
      this.getNotes();
    }


}
