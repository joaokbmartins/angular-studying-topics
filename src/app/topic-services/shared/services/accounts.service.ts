import { EventEmitter, Injectable } from '@angular/core'; 

import { Account } from '../../components/principal-service/account/account.model';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {

  private accoutns: Array<Account> = new Array<Account>();

  private statusUpdated: EventEmitter<string> = new EventEmitter<string>();

  public constructor(
    private loggingService:LoggingService
  ) {}
  
  public addAccount(newAccount: Account): void {
    this.accoutns.push(newAccount);
    this.loggingService.logNewStatus(newAccount.getStatus());
  }

  public updateAccountStatus(status: string, account: Account) {
    account.setStatus(status);
    this.loggingService.logNewStatus(status);
  }

  public getAccounts(): Array<Account> {
    return this.accoutns;
  }

  public getStatusUpdated(): EventEmitter<string> {
    return this.statusUpdated;
  }

}