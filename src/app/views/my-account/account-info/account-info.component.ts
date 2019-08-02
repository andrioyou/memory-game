import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from '../interfaces/user.interface';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit, OnDestroy {
  user: User | null = null;
  isLoading = true;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService
      .getAccountInfo()
      .pipe(untilComponentDestroyed(this))
      .subscribe((user: User) => {
        this.user = user;
        this.isLoading = false;
      });
  }

  ngOnDestroy() {}
}
