import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<User>();
  @Input() message = '';
  loginForm: FormGroup;
  user: User | null = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.formSubmit.emit(this.user);
  }
}
