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
    for (let i = 1; i < 2; i++) {
      this.vehiculoService.getVehicles(`?page=${i}`).subscribe((vehiculo: RespuestaSwapi) => {
        this.listadoVehiculos.push(...vehiculo.results);
        console.log(this.listadoVehiculos);
      });
    }
  }
  
  

  cargarFotoVehiculo(url : string) {
    const id = url.split('/')[5];

    return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
  }
  
  
  
}
