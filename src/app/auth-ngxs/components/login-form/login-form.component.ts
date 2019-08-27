import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginData } from '../../interfaces/login-data.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  @Input() alert!: string;
  @Output() LogInSubmit = new EventEmitter<LoginData>();

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor() {}

  submit() {
    this.LogInSubmit.emit(this.loginForm.value);
  }
}
