import { MyserviceService } from './../myservice.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  successMessage : string = "";
  myForm: FormGroup;

  constructor(private _myservice:MyserviceService) {
    this.myForm = new FormGroup({
      first : new FormControl(null),
      last : new FormControl(null),
      email : new FormControl(null, Validators.email),
      password : new FormControl(null, Validators.required),
      cnfpass : new FormControl(null, this.passValidator),
    });

    this.myForm.controls.password.valueChanges
    .subscribe(
      x => this.myForm.controls.cnfpass.updateValueAndValidity()
    );

   }

  ngOnInit(): void {
    console.log(this.deviceXs);
  }

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }

  @Input() deviceXs: boolean;

  register() {
    console.log(this.myForm.value);
    this._myservice.submitRegister(this.myForm.value)
    .subscribe(
      data => this.successMessage = "SUCCESSful registeration :)",
      error => this.successMessage = "Error :(",
    );
  }

}
