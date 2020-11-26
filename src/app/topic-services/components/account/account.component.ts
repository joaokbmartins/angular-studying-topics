import {
  EventEmitter,
  Component,
  Input,
  Output
} from '@angular/core';
import { Account } from './account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  @Input()
  private account: Account = null;
  
  @Output()
  private changeAccountStatus: EventEmitter<string> = new EventEmitter<string>();
  
  public setAccountStatus(status: string): void {
    this.changeAccountStatus.emit(status);
  }

  public getAccount(): Account {
    return this.account;
  }

  public setAccount(account: Account): void {
    this.account = account;
  } 

}