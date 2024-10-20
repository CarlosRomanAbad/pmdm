import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaSwapi, Vehiculo } from '../interface/vehiculo.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {



  constructor(private http : HttpClient) { }


  getVehicles(masVehiculos? : string): Observable<RespuestaSwapi> {
    return this.http.get<RespuestaSwapi>(`https://swapi.dev/api/vehicles${{masVehiculos} ? `?${masVehiculos}` : ''}`);  }
   
}
