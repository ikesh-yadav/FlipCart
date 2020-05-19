import { userData } from './../../Interfaces/userdata';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
        'https://flipcart-meanapp.herokuapp.com/api/users/login',
        body,
        {
          observe: 'body'
        }
      );
  }

  getUserData():Observable<userData> {
      return this._http.get<userData>('https://flipcart-meanapp.herokuapp.com/api/users/email?token='+localStorage.getItem('token'), {
        observe : 'body',
      });
  }

  isLoggedIn():Observable<boolean> {
    if(localStorage.getItem('token') != null) {
      return of(true);
    } else {
      return of(false);
    }
  }

}
