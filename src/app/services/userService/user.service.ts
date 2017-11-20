import { Injectable       } from '@angular/core';

@Injectable()
export class UserService {
  private _isUserLogedIn: boolean = false;
  private _username:      string;
  constructor() {
    this._isUserLogedIn = false;
  }
  setUserLogedIn(username) {
    this._isUserLogedIn = true;
    this._username = username;
  }
  getUserLoggedIn() {
    return this._isUserLogedIn;
  }
  getUsername() {
    return this._username;
  }
}
