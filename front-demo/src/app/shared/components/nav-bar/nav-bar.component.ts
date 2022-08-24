import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {
  username: string = '';
  isAuthenticated : boolean = false;

  constructor() {}

  ngOnInit() {
    this.username = '';

    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user);
        this.username = user.username;
        this.isAuthenticated = true
      })
      .catch(() => console.log('Not signed in'));
  }

  onLogoutClick(data: any) {
    console.log('Logout Clicked');
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
}
