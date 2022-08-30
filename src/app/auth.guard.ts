import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Auth } from '@aws-amplify/auth';
import { Observable } from 'rxjs';
import { UserClass } from './models/user';
import { UserService } from './services/user/user.service';

/**
 * Prevent access to routes if access-token is not present.
 * @export
 * @class AuthGuard
 * @implements {CanActivate}
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private userService:UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return Auth.currentAuthenticatedUser()
      .then((data) => {
        const currentUser = new UserClass(
          data.username,
          'fabian@janu.com',
          'prueba',
          'Fabian',
          'Januszewski'
        );
        this.userService.currentUser$.next(currentUser)
        return true;
      })
      .catch((error) => {
        console.log(error);
        this._router.navigate(['/login']);
        return false;
      });
  }
}
