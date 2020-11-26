import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';  
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html'
})
export class InactiveUserComponent {

  @Input()
  private user: User = null;

  @Output()
  private activateUser: EventEmitter<void> = new EventEmitter<void>();

  public onActivate(): void {
    this.activateUser.emit();
  }

  public getUser(): User {
    return this.user;
  } 

}