import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/userService/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string;
  constructor(private _router: Router, private _user: UserService ) { }

  ngOnInit() {
    console.log('Is user Loged in: ',this._user.getUserLoggedIn());
    if (this._user.getUserLoggedIn() === true) {
      this.username = this._user.getUsername();
    }else {
      // this._router.redirectTo(['']);
    }
  }

}
