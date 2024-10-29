import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../interface/pokemon-interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemonId!: number;
  pokemon!: PokemonResponse;
  @Input() life: number = 100;
  @Input() isTurn: boolean = false;
  @Output() onAttackDone = new EventEmitter<number>();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    if (this.pokemonId) {
      this.pokemonService.getPokemon(this.pokemonId).subscribe((pokemon: PokemonResponse) => {
        this.pokemon = pokemon;
      });
    }
  }

  attack(): void {
    const damage = Math.floor(Math.random() * (50 - 30 + 1)) + 30; 
    this.onAttackDone.emit(damage);
  }
}