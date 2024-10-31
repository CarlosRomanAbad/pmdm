import { Component } from '@angular/core';
import { UserDto } from '../../models/user.dto';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  sexOptions = ['male', 'female'];

  howMeetPageOptions = ['google', 'facebook', 'twitter', 'other'];

  user = new UserDto('', '', '', '', '', '', '');


  onSubmit() {
    console.log(this.user);
  }
}
