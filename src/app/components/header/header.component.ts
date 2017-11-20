import { Component, OnInit      } from '@angular/core';
import {UserService} from '../../services/userService/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string = '';
  isLogedIn: boolean;
  constructor(private _user: UserService) {

  }

  ngOnInit() {
    console.log('Is user Loged in: ', this._user.getUserLoggedIn());
  }


}
