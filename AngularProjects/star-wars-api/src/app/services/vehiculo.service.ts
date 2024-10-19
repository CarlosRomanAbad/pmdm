import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaSwapi, Vehiculo } from '../interface/vehiculo.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {



  constructor(private http : HttpClient) { }


  getVehicles(masVehiculoas? : string): Observable<RespuestaSwapi> {
    return this.http.get<RespuestaSwapi>(`https://swapi.dev/api/vehicles${{masVehiculoas} ? `?${masVehiculoas}` : ''}`);  }
   
}
