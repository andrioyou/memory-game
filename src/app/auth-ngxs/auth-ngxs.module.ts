import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthNgxsRoutingModule } from './auth-ngxs-routing.module';

// components
import { LoginFormComponent } from './components/login-form/login-form.component';

// forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// ngxs
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './store/auth.state';

// http
import { HttpClientModule } from '@angular/common/http';

// auth
import { AuthService } from './services/auth.service';
import { AuthNgxsComponent } from './container/auth-ngxs/auth-ngxs.component';

@NgModule({
  declarations: [LoginFormComponent, AuthNgxsComponent],
  imports: [
    CommonModule,
    AuthNgxsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forFeature([AuthState])
  ],
  providers: [AuthService]
})
export class AuthNgxsModule {}
