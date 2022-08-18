import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestApiService } from '../rest-api/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private restApiService: RestApiService) { }

  fetch():Observable<any>{
    return this.restApiService.get('api/admin/message', null, { observe: 'response' });
  }

}
