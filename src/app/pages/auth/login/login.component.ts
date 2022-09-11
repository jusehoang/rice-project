import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FooterComponent } from 'src/app/component/footer/footer.component';
import { MessageService } from 'src/app/@services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup<{
    username: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;
  constructor(private readonly message: MessageService) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }

  getErrorMessage() {
    // if (this.form.controls['username'].hasError('required')) {
    //   return 'Username is required';
    // }
    return 'Username is required';

    // return this.form.controls['username'].hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPasswordMessage() {
    // if (this.form.controls['password'].hasError('required')) {

    // }
    return 'Password is required';
  }

  login() {
    this.message.createMessage({
      content: 'Hello',
      type: 'success',
    })
  }

}
