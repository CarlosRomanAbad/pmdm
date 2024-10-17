import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {


  getProgressColor(): string {
    if (this.valor < 50) {
      return 'danger';
    }
    if (this.valor < 80) {
      return 'warning';
    }
    return 'success';
  }

  @Input() valor = 90;

  @Input() color = 'primary';


  @Input () altura  = 0


  mostrarAlerta(altura : number){
    if(altura > 20){
      alert('mides mas de 20')
    }
  }
}
