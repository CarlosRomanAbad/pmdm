import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';
import { PeopleService } from '../../services/people.service';
import { People, PeopleResponse } from '../../interface/people.interface';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit{

  listadoPeople: People[] = [];

  constructor(private people : PeopleService) { }

 

  ngOnInit(): void {
    this.people.getPeople().subscribe((data : PeopleResponse) =>{
      this.listadoPeople = data.results;
    })
  }

cargarFotoPersonaje(url : string){
  
  const id = url.split('/')[5];

  return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
}
}
