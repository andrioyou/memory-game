import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoginData } from '../../interfaces/login-data.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<LoginData>();
  @Input() message = '';
  @Input() verifStatus = false;
  loginForm: FormGroup;
  loginData: LoginData | null = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.loginData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.formSubmit.emit(this.loginData);
  }
}
