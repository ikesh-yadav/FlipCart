import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  xs:boolean;
  constructor() { }

  ngOnInit(): void {
    console.log(this.deviceXs);
  }

  @Input() deviceXs: boolean;

  isdeviceXs() {
    this.xs = this.deviceXs;
    return this.deviceXs;

  }

}
