import { Component, OnInit      } from '@angular/core';
import { Router                 } from '@angular/router';
import { UserService            } from '../../services/userService/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;
  constructor(private _router: Router, private _user: UserService ) { }

  ngOnInit() {
  }
  loginUser(e) {

    e.preventDefault();
    this.username  = e.target.elements[0].value;
    this.password = e.target.elements[1].value;
    if ( this.username === 'admin' && this.password === 'admin') {
        this._user.setUserLogedIn(this.username);
        this._router.navigate(['dashboard']);
    }
  }
}
