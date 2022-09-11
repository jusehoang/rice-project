import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hideconfirmPassword = true;
  hide = true;
  form: FormGroup<{
    fullname: FormControl<string | null>;
    email: FormControl<string | null>;
    phone: FormControl<string | null>;
    username: FormControl<string | null>;
    password: FormControl<string | null>;
    confirmPassword: FormControl<string | null>;
  }>;
  constructor() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      fullname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('')]),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required,
        this.confirmValidator
      ]))
    })
  }

  ngOnInit(): void {
  }

  confirmValidator = (control: FormControl) => {
    if(!control.value) {
      return { required: true }
    } else if(control.value !== this.form.controls.password.value) {
      return { match: true}
    }

    return null;
  }

  login() {}

  getErrorFullnameMessage() {}

  getErrorEmailMessage() {}

  getErrorPhoneMessage() {}

  getErrorUsernameMessage() {}

  getErrorPasswordMessage() {}

  getErrorConfirmPasswordMessage(): string {
    if(this.form.controls['confirmPassword'].hasError('required')) {
      return "Password is required"
    }
    console.log(this.form.controls['confirmPassword'])

    return this.form.controls.confirmPassword.hasError('match') ? "Password does not match" : '';
  }

  register() {}

}
