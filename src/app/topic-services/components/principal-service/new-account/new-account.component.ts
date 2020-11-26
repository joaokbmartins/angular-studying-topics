import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import { Account } from '../account/account.model';
import { LoggingService } from '../../../shared/services/logging.service';
import { AccountsService } from '../../../shared/services/accounts.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  // providers: [LoggingService]
})
export class NewAccountComponent {

  @ViewChild('accountNameInput', {static: false})
  private accountNameInput:ElementRef = null;

  @ViewChild('accountStatusInput', {static: false})
  private accountStatusInput:ElementRef = null;
  
  public constructor(
    // private loggingService: LoggingService,
    private accountsServices: AccountsService
  ) { }

  public onAddAccount(): void {
    const accountName = this.accountNameInput.nativeElement.value;
    const accountStatus = this.accountStatusInput.nativeElement.value; 
    // this.addAccount.emit(new Account(accountName, accountStatus));
    this.accountsServices.addAccount(new Account(accountName, accountStatus));
    this.accountsServices.getStatusUpdated().subscribe(
      (status: string) => alert("new account status: " + status)
    );
    // this.loggingService.logNewStatus(accountStatus);
  }

}