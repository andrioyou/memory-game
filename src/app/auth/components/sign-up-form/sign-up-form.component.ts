import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SignUpData } from '../../interfaces/sign-up-data.interface';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent implements OnInit {
  @Input() message = '';
  @Input() alert = '';
  @Input() isLoading = false;
  @Output() formSubmit = new EventEmitter<SignUpData>();

  signUpForm: FormGroup = new FormGroup({
    email: new FormControl(),
    name: new FormControl(),
    password: new FormControl()
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.formSubmit.emit(this.signUpForm.value);
  }
}
