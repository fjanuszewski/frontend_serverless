import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {
  username: string = '';
  isAuthenticated: boolean = false;

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.username = '';
    this.isAuthenticated = this.userService.getIsAuthenticated();
  }

  onLogoutClick(data: any) {
    console.log('Logout Clicked');
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  onLoginClick(isOkta: boolean) {
    isOkta
      ? Auth.federatedSignIn({
          customProvider: 'OktaWebFlow',
        })
      : Auth.federatedSignIn();
  }

}
