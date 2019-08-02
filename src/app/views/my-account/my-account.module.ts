import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { MyAccountRoutingModule } from './my-account-routing.module';

// components
import { AccountInfoComponent } from './account-info/account-info.component';

// services
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [AccountInfoComponent],
  imports: [CommonModule, MyAccountRoutingModule],
  providers: [AccountService]
})
export class MyAccountModule {}
