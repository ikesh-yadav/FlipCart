import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
    url:string = '';
  //url:string = 'https://flipcart-meanapp.herokuapp.com'

  constructor(private _http: HttpClient) { }

  submitRegister(body:any) {
    return this._http
      .post(
        this.url+'/api/users',
        body,
        {
          observe: 'body'
        }
      );
  }

  submitLogin(body:any) {
    return this._http
      .post(
        this.url+'/api/users/login',
        body,
        {
          observe: 'body'
        }
      );
  }

  getUserData() {
      return this._http.get(this.url+'/api/users/email?token='+localStorage.getItem('token'), {
        observe : 'body',
      });
  }

  getProducts(category) {
    return this._http.get(this.url+'/api/products/category/'+category, {
        observe : 'body',
      });
  }

  getProductsById(id) {
    return this._http.get(this.url+'/api/products/'+id, {
        observe : 'body',
      });
  }

  updateUserCart(cartProducts) {
    return this._http.post(this.url+'/api/users/update?token='+ localStorage.getItem('token'),
    {
      "cart" : cartProducts
    },
    {
      observe : 'body'
    });
  }

  

}
