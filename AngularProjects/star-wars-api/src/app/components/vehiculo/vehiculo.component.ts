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
    this.vehiculoService.getVehicles().subscribe((vehiculo : RespuestaSwapi) => {
      console.log(vehiculo.results); 
      this.listadoVehiculos = vehiculo.results; 
    });
  }


  cargarFotoVehiculo(url : string) {
    let id = url.split('/')[5];
    return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
  }
  
}
