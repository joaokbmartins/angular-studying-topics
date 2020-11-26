import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import { Account } from '../account/account.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html'
})
export class NewAccountComponent {

  @ViewChild('accountNameInput', {static: false})
  private accountNameInput:ElementRef = null;

  @ViewChild('accountStatusInput', {static: false})
  private accountStatusInput:ElementRef = null;

  @Output()
  private addAccount: EventEmitter<Account> = new EventEmitter<Account>();

  public onAddAccount(): void {
    const accountName = this.accountNameInput.nativeElement.value;
    const accountStatus = this.accountStatusInput.nativeElement.value; 
    this.addAccount.emit(new Account(accountName, accountStatus));
  }

}