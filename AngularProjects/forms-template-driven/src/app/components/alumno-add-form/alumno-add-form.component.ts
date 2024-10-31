import { Component } from '@angular/core';
import { AlumnoDto } from '../../models/alumno.dto';

@Component({
  selector: 'app-alumno-add-form',
  templateUrl: './alumno-add-form.component.html',
  styleUrl: './alumno-add-form.component.css'
})
export class AlumnoAddFormComponent {


  cursos: string[] = ['Angular', 'React', 'Vue'];

  alumno = new AlumnoDto('',this.cursos[-1], 18, '');

  constructor() { }

    addStudent() {
    console.log(this.alumno);

    alert('Alumno añadido');
  }
}
