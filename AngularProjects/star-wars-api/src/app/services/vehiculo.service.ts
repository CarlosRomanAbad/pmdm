import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../interface/vehiculo.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http : HttpClient) { }


  getAllVehiculos () :  Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>('http://localhost:3000/vehicles');
  }
   
}
