import {
  EventEmitter,
  Component,
  Input,
  Output
} from '@angular/core';

import { Account } from './account.model';
import { AccountsService } from '../../../shared/services/accounts.service';
import { LoggingService } from 'src/app/topic-services/shared/services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {

  @Input()
  private account: Account = null;

  public constructor(
    // private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}
  
  public setAccountStatus(status: string): void {
    if (this.account.getStatus() == status) {
      return;
    }
    this.accountsService.updateAccountStatus(status, this.account);
    this.accountsService.getStatusUpdated().emit(status);
    // this.loggingService.logNewStatus(status);
  }

  public getAccount(): Account {
    return this.account;
  }

  public setAccount(account: Account): void {
    this.account = account;
  } 

}