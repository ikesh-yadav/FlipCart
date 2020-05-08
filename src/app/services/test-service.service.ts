import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  getContent() {
    return ["returned by service", "stuff", "other stuff"];
  }
 }
