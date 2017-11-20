import { Injectable                                                       } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from '@angular/router';
import { Observable                                                       } from 'rxjs/Observable';
import { UserService                                                      } from '../../services/userService/user.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(private _user: UserService, private router: Router ) {  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._user.getUserLoggedIn() === false) {
      console.log('You are not Authenticated');
      this.router.navigate(['login']);
    }else {

      return this._user.getUserLoggedIn();

    }
  }
}
