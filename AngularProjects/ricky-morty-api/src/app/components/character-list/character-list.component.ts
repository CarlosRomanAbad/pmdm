import { Component, OnInit } from '@angular/core';
import { CharacterListService } from '../../services/character-list.service';
import { Character, CharacterResponse } from '../../interface/character-list-interface';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {

  constructor(private character : CharacterListService) { }

  listadoPersonajes : Character [] = []

  ngOnInit(): void {
    
    this.character.getCharacterList().subscribe((data : CharacterResponse) => {
      this.listadoPersonajes = data.results
    })

  }

  

}
