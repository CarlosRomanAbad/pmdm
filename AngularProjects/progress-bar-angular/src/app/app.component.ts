import { Component } from '@angular/core';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  title = 'progress-bar-angular';

  valor: number = 50;

comprobarValor(valor: number) : void{
  if(valor < 0){
    this.valor = 0;
    
  }
  else if(valor > 100){
    this.valor = 100;
  }
  else{
    this.valor = valor;
  }
  
}

}
