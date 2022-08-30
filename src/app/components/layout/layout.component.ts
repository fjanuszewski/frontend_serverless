import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
  // name: string = '';
  isAuthenticated : boolean = false;
  constructor(public user: UserService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.spinner.hide();
    // this.name = this.user.getUser()?.name || ""
    // this.isAuthenticated = this.name ? true : false;
  }

}
