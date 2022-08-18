import { Component, OnInit, NgZone } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private zone: NgZone,
    private spinner: NgxSpinnerService) {


    // Used for listening to login events
    Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === "cognitoHostedUI" || event === "signedIn") {
        console.log(event);
        this.zone.run(() => this.router.navigate(['/dashboard']));
      } else {
        this.spinner.hide();
      }
    });

    //currentAuthenticatedUser: when user comes to login page again
    Auth.currentAuthenticatedUser()
      .then(() => {
        this.router.navigate(['/dashboard'], { replaceUrl: true });
      }).catch((err) => {
        this.spinner.hide();
        console.log(err);
      })

  }

  ngOnInit() { }

  /**
   * Maneja el tipo de inicio de sesión seleccionado, para manipular el
   * redireccionamiento a la interfaz de cognito.
   * @param isOkta Flag que indica si utiliza el customProvider OktaWebFlow
   */
  onLoginClick(isOkta: boolean) {
    this.spinner.show();
    isOkta ? Auth.federatedSignIn({
          customProvider: 'OktaWebFlow'})
          :
          Auth.federatedSignIn();
  }

}