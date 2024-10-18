import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../interface/vehiculo.interface';
import { VehiculoService } from '../../services/vehiculo.service';



@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrl: './vehiculo.component.css'
})
export class VehiculoComponent implements OnInit {


  listadoVehiculos: any[] = [];

  constructor(private vehiculoService: VehiculoService) { }


  ngOnInit(): void {
    this.vehiculoService.getVehicles().subscribe((data: any) => {
      console.log(data); 
      this.listadoVehiculos = data.results; 
    });
  }


  cargarFotoVehiculo(url : string) {
    let id = url.split('/')[5];
    return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
  }
  
}
