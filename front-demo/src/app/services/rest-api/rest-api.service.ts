import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  backend_url: string =  environment.resourceServerURL; 
  token:any;
  /**
   * Cabeceras HTTP
   */
   public headers: HttpHeaders;

  constructor(public http: HttpClient) {
    this.token ="";
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  public _addStandardHeaders(header:HttpHeaders){
    header = header.append('Content-Type','application/json');
    header = header.append('Accept','application/json');
    header = header.append('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    
    return header;
  }

  get(endpoint: string, params?: any, reqOpts?: any):Observable<any> {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.backend_url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post<any>(this.backend_url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.backend_url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.backend_url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.backend_url + '/' + endpoint, body, reqOpts);
  }

  public newGet<T>(url: string): Observable<T[]> {
    return this.http.get<T[]>(url, { headers: this.headers });
  }
}
