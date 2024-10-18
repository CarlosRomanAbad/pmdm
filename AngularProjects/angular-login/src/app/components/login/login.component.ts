import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  @Input () email = ''


  @Input () password = ''

  verMailIntroducido(email : string , password : string){
    console.log(this.email , this.password)
  }
}
