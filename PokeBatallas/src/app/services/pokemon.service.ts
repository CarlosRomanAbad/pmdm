import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interface/pokemon-interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  

  constructor(private http: HttpClient) { }

   getPokemon(): Observable<PokemonResponse> {
    const randomId = Math.floor(Math.random() * 898) + 1; // Generar un ID aleatorio entre 1 y 898
    return this.http.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  }

  getPokemonById(id: number): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

}