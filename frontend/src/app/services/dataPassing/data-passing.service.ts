import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

class userData {
  username:string;
  cart;
}


@Injectable({
  providedIn: 'root'
})
export class DataPassingService {

  constructor() { }

  private dataSubject = new BehaviorSubject<userData>({"username":"", "cart":[]});

  dataObservable:Observable<userData> = this.dataSubject.asObservable();

  Send(user_data) {
    console.log(user_data);
    this.dataSubject.next(user_data);
  }
/*
  loadingOff() {
    this.dataSubject.next(user_data);
  }
*/
}
