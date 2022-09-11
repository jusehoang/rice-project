import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email: FormControl<string | null>;
  constructor() {
    this.email = new FormControl('', [Validators.required, Validators.email])
   }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email không được để trống!';
    }

    return this.email.hasError('email') ? 'Email không đúng định dạng!' : '';
  }

  forgotPassword() {}

}
