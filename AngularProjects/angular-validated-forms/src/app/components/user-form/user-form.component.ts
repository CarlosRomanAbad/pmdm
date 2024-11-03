import { Component } from '@angular/core';
import { UserDto } from '../../models/user.dto';

@Component({
  selector: 'app-formulario-registro',
   templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class FormularioRegistroComponent {

  sexOptions = ['male', 'female'];
  howMeetPage = ['friends', 'internet', 'tv', 'radio', 'other'];
  user = new UserDto('', '', '', '', '', '', '');
  confirmPassword = '';
  nifLetter = '';
  errorMessage = '';

  calculateNifLetter() {
    let nif = this.user.nif;
    if (nif.length === 8 && !isNaN(Number(nif))) {
      const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
      const letter = letters.charAt(Number(nif) % 23);
      this.nifLetter = letter;
    } else {
      this.nifLetter = '';
    }
  }

  onSubmit() {
    if (this.validateForm()) {
      console.log(this.user);
    }
  }

  validateForm(): boolean {
    if (!this.user.name || !this.user.surname || !this.user.nif || !this.user.phone || !this.user.sex || !this.user.password || !this.confirmPassword || !this.user.howMeetPage) {
      this.errorMessage = 'Escribe todos los campos.';
      return false;
    }
    if (this.user.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return false;
    }
    this.errorMessage = '';
    return true;
  }
}

