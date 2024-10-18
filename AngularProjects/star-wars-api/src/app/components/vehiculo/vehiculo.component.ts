import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../interface/vehiculo.interface';
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
    
    this.vehiculoService.getAllVehiculos().subscribe((data: Vehiculo[]) => {
      this.listadoVehiculos = data;
    });
  }
}
