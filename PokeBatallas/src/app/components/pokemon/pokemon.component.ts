import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../interface/pokemon-interface';
import { PokemonList } from '../../interface/pokemon-battle-interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'] // Cambiado de 'styleUrl' a 'styleUrls'
})
export class PokemonComponent implements OnInit {


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    
  }
}