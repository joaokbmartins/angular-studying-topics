import {
  EventEmitter,
  Component
} from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent {

  private changeAccountStatus: EventEmitter<string> = new EventEmitter<string>();
  
  public setAccountStatus(status: string): void {
    this.changeAccountStatus.emit(status);
  }

}