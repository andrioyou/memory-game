import { Component, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginData } from '../../interfaces/login-data.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  @Input() alert = '';
  @Input() isLoading = false;
  @Output() formSubmit = new EventEmitter<LoginData>();

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor() {}

  onSubmit() {
    this.formSubmit.emit(this.loginForm.value);
  }
}
