import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http: HttpClient) { }

  submitRegister(body:any) {
    return this._http
      .post(
        'https://flipcart-meanapp.herokuapp.com/api/users',
        body,
        {
          observe: 'body'
        }
      );
  }

  submitLogin(body:any) {
    return this._http
      .post(
        'https://flipcart-meanapp.herokuapp.com/api/passwords/check',
        body,
        {
          observe: 'body'
        }
      );
  }

  getUserName() {
    return this._http.get('https://flipcart-meanapp.herokuapp.com/api/users/getemail', {
      observe : 'body',
      params : new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

}
