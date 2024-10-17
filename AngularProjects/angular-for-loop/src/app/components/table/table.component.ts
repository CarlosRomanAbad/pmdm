  import { Component } from '@angular/core';


  export interface CountryPhone{

    nombre: string;
    flag: string;
    prefix: number [];

  }

  const COUNTRY_PREFIXES : CountryPhone [] = [

    {nombre: 'Argentina', flag: '🇦🇷', prefix: [54]},
    {nombre: 'Brasil', flag: '🇧🇷', prefix: [55]},
    {nombre: 'Chile', flag: '🇨🇱', prefix: [56]},
    {nombre: 'Colombia', flag: '🇨🇴', prefix: [57]},
    {nombre: 'Ecuador', flag: '🇪🇨', prefix: [593, 2 , 3]},
    {nombre: 'España', flag: '🇪🇸', prefix: [34]},
    {nombre: 'Estados Unidos', flag: '🇺🇸', prefix: [1]},
    {nombre: 'México', flag: '🇲🇽', prefix: [52]},
    {nombre: 'Perú', flag: '🇵🇪', prefix: [51]},
    {nombre: 'Uruguay', flag: '🇺🇾', prefix: [598]}
  ]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  countries = COUNTRY_PREFIXES;



}
