import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  hideOldPassword = true;
  hideNewPassword = true;
  hideConfirmPassword = true;
  form: FormGroup<{
    oldPassword: FormControl<string | null>;
    newPassword: FormControl<string | null>;
    confirmPassword: FormControl<string | null>;
  }>;
  constructor() {
    this.form = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    })
  }


  ngOnInit(): void {
  }

  getErrorOldPasswordMessage() {
    // if (this.form.controls['password'].hasError('required')) {

    // }
    return 'Mật khẩu cũ không được để trống';
  }

  getErrorNewPasswordMessage() {
    // if (this.form.controls['password'].hasError('required')) {

    // }
    return 'Mật khẩu mới không được để trống';
  }

  getErrorConfirmPasswordMessage() {
    // if (this.form.controls['password'].hasError('required')) {

    // }
    return 'Mật khẩu mới không được để trống';
  }

  changePassword() {
    // this.message.createMessage({
    //   content: 'Hello',
    //   type: 'success',
    // })
  }

}
