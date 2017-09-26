import { Injectable } from '@angular/core';
import {Note} from './note';
import {Http} from '@angular/http';
import {Observable } from "rxjs";
import "rxjs";

@Injectable()
export class ApiService {

  constructor( private _http: Http) {}

  create(note: Note){
    return this._http.post("/notes", note).map(data => data.json());
  }
  // ++++++++++++++++++++++++++++++++
    destroy(note :Note){
      return this._http.delete("/notes/"+note._id).map(data => data.json());
    }
    // ++++++++++++++++++++++++++++++
  update(note: Note){
    return this._http.put("/notes/"+note._id, note).map(data => data.json());
    }
    // +++++++++++++++++++++++++++++++
  getNote(note: Note){
      return this._http.get("/notes/"+note._id).map(data => data.json());
  }
  // +++++++++++++++++++++++++++++++++++++++++
  getNotes(){
      return this._http.get("/notes").map(data => data.json());
  }

}
