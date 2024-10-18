import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../interface/vehiculo.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl = 'https://swapi.dev/api/vehicles/';


  constructor(private http : HttpClient) { }


  getVehicles(): Observable<Vehiculo []> {
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }
   
}
