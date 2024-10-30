import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title = 'Bienvenido a la página de inicio';
  precio = 126.22
  createdAt = '05-15-2004'
  pctajeVida = 0.75
}
