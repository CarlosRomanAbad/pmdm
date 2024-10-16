import { Component } from '@angular/core';

export interface PeriodicElement {
  numAlumno: number;
  nombre : string;
  nif: string;
  apellidos: string;
  edad : number;
  cursoMatriculado : string;
}

const ELEMENT_DATA : PeriodicElement[] = [
  {numAlumno : 1 , nombre : 'carlos' , nif : '12345678A' , apellidos : 'Garcia' , edad : 20 , cursoMatriculado : 'Angular'},
  {numAlumno : 2 , nombre : 'juan' , nif : '12345678B' , apellidos : 'Garcia' , edad : 21 , cursoMatriculado : 'Angular'},
  {numAlumno : 3 , nombre : 'pedro' , nif : '12345678C' , apellidos : 'Garcia' , edad : 22 , cursoMatriculado : 'Angular'},
  {numAlumno : 4 , nombre : 'luis' , nif : '12345678D' , apellidos : 'Garcia' , edad : 23 , cursoMatriculado : 'Angular'},
  {numAlumno : 5 , nombre : 'jose' , nif : '12345678E' , apellidos : 'Garcia' , edad : 24 , cursoMatriculado : 'Angular'},
  {numAlumno : 6 , nombre : 'maria' , nif : '12345678F' , apellidos : 'Garcia' , edad : 25 , cursoMatriculado : 'Angular'},
  {numAlumno : 7 , nombre : 'laura' , nif : '12345678G' , apellidos : 'Garcia' , edad : 26 , cursoMatriculado : 'Angular'},
  {numAlumno : 8 , nombre : 'julia' , nif : '12345678H' , apellidos : 'Garcia' , edad : 27 , cursoMatriculado : 'Angular'},
  {numAlumno : 9 , nombre : 'lucia' , nif : '12345678I' , apellidos : 'Garcia' , edad : 28 , cursoMatriculado : 'Angular'},
  {numAlumno : 10 , nombre : 'ana' , nif : '12345678J' , apellidos : 'Garcia' , edad : 29 , cursoMatriculado : 'Angular'},
  {numAlumno : 11 , nombre : 'alicia' , nif : '12345678K' , apellidos : 'Garcia' , edad : 30 , cursoMatriculado : 'Angular'}
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  displayedColumns : string[] = ['numAlumno' , 'nombre' , 'nif' , 'apellidos' , 'edad' , 'cursoMatriculado'];
  dataBase = ELEMENT_DATA;


  mostrarDatos(){
    console.log(this.dataBase);
  }
}
