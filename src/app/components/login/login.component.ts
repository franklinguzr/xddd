import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user;

  constructor( private service: UserService, private router: Router
  ) {
    this.user = new User('', '', '', '', '', '');
   }

  ngOnInit() {
  }

  login(loginForm){
    if (loginForm.valid) {
      /*
      this._userService.login(this.user).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    }else{
    }
  */
    }
}
}
