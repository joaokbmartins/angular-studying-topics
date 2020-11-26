import {
  OnInit,
  Component
} from '@angular/core';
import { Account } from '../account/account.model';

@Component({
  selector: 'app-principal-service',
  templateUrl: './principal-service.component.html'
})
export class PrincipalServiceComponent implements OnInit{

  private accounts: Array<Account> = null;

  constructor() { 
    this.accounts = new Array<Account>();
  }

  ngOnInit() {
    // this.getAccounts().push(new Account('Master', 'inactive'));
    // this.getAccounts().push(new Account('Administrator', 'active'));
  }

  public addNewAccount(account: Account): void {
    this.accounts.push(account);
  }

  public updateStatus(newStatus:string, account:Account): void  {
    account.setStatus(newStatus);
  }

  public getAccounts(): Array<Account> {
    return this.accounts;
  }

}