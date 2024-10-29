import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.css']
})
export class PokemonBattleComponent  {

  lifePokemon1: number = 100;
  lifePokemon2: number = 100;
  pokemonTurn: number = 1;

  constructor(private pokemonService: PokemonService) { }

  
  handleAttack(damage: number, target: 'pokemon1' | 'pokemon2'): void {
    if (target === 'pokemon1') {
      this.lifePokemon1 = Math.max(this.lifePokemon1 - damage, 0);
    } else {
      this.lifePokemon2 = Math.max(this.lifePokemon2 - damage, 0);
    }
    
    if (this.lifePokemon1 <= 0) {
      alert( 'Pokemon 2 ha ganado')
    } else if (this.lifePokemon2 <= 0) {
      alert( 'Pokemon 1 ha ganado')
    } 
    this.pokemonTurn = this.pokemonTurn === 1 ? 2 : 1; 
  }

  comprobarGanador(): void {
    
  }
}