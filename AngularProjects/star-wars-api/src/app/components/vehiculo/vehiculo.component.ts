import { Component, OnInit } from '@angular/core';
import { RespuestaSwapi, Vehiculo } from '../../interface/vehiculo.interface';
import { VehiculoService } from '../../services/vehiculo.service';



@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrl: './vehiculo.component.css'
})
export class VehiculoComponent implements OnInit {


  listadoVehiculos: Vehiculo[] = [];

  constructor(private vehiculoService: VehiculoService) { }


  ngOnInit(): void {
    for (let i = 1; i < 4; i++) {
      this.vehiculoService.getVehicles(`?page=${i}`).subscribe((vehiculo: RespuestaSwapi) => {
        this.listadoVehiculos.push(...vehiculo.results);
        console.log(this.listadoVehiculos);
      });
    }
  }
  
  

  cargarFotoVehiculo(url : string) {
    let id = url.split('/')[5];

    let noFoto = url.split('/')[4] == null;

    if(noFoto) {
      return `https://starwars-visualguide.com/assets/img/placeholder.jpg`;
    }
    return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
  }
  

}
