import {
  OnInit,
  Component
} from '@angular/core';

import { Account } from './account/account.model';
import { LoggingService } from '../../shared/services/logging.service';
import { AccountsService } from '../../shared/services/accounts.service';

@Component({
  selector: 'app-principal-service',
  templateUrl: './principal-service.component.html',
  providers: [
    // LoggingService,
    // AccountsService
  ]
})
export class PrincipalServiceComponent implements OnInit{

  private accounts: Array<Account> = null;

  constructor(
    // private loggingService: LoggingService,
    private accountsService: AccountsService
  ) { }
  
  public ngOnInit() { 
    this.accounts = this.accountsService.getAccounts();
  }

  public addNewAccount(account: Account): void {
    this.accountsService.addAccount(account);
  }

  public updateStatus(newStatus: string, account: Account): void  {
    this.accountsService.updateAccountStatus(newStatus, account);
    // this.loggingService.logNewStatus(newStatus);
  }

  public getAccounts(): Array<Account> {
    return this.accounts;
  }

}