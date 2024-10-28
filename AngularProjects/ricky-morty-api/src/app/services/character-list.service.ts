import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../interface/character-list-interface';


@Injectable({
  providedIn: 'root'
})
export class CharacterListService {

  constructor(private http : HttpClient) { }

  getCharacterList(): Observable<CharacterResponse>{
    return this.http.get<CharacterResponse>('https://rickandmortyapi.com/api/character')
  }
}
