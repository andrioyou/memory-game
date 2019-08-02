import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoginData } from '../../interfaces/login-data.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() alert!: string;
  @Output() LogInSubmit = new EventEmitter<LoginData>();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {}

  submit() {
    this.LogInSubmit.emit(this.loginForm.value);
  }
}
