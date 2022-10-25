import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserClass, UserInterface } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser$: BehaviorSubject<UserClass>//Subject<UserClass>;
  isAuthenticated: boolean = false;
  constructor() {
    this.currentUser$ = new BehaviorSubject<UserClass>(new UserClass(
      '',
      'fabian@janu.com',
      'prueba',
      'Fabian',
      'Januszewski'
    ))
  }
  getAuthUserData() {
    return Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user)
        this.isAuthenticated = true;
        const currentUser = new UserClass(
          user.username,
          'fabian@janu.com',
          'prueba',
          'Fabian',
          'Januszewski'
        );
        this.currentUser$.next(currentUser)
        return currentUser
      })
  }
  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  getUser(): Subject<UserClass>{
    return this.currentUser$;
  }
}
