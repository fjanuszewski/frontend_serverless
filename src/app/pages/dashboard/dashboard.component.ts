import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { HttpStatusCode } from 'src/app/utility/HttpStatusCode';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
              private spinner: NgxSpinnerService) { }

  message: string = '';

  ngOnInit() {

    
    this.spinner.show();
    this.spinner.hide();

    // this.fetchMessage()

  }

  fetchMessage(){
    this.dashboardService.fetch()
    .pipe(
      catchError(err => {
        console.log(err);
        return of(null)
      })
    )
    .subscribe( (res: any) => {

      if (res?.status === HttpStatusCode.HTTP_OK) {
          this.message = res.body.message;
        }
      this.spinner.hide();
      });

  }

}