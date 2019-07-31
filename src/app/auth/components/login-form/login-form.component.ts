import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginData } from '../../interfaces/login-data.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Input() message = '';
  @Input() isLoading = false;
  @Output() formSubmit = new EventEmitter<LoginData>();

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', []),
    password: new FormControl('', [])
  });

  constructor() {}

  onSubmit() {
    this.formSubmit.emit(this.loginForm.value);
  }
}
