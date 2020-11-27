import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';  
import { User } from '../../../shared/models/user.model';
import { UsersService } from '../../../shared/services/users.services';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html'
})
export class InactiveUserComponent {

  @Input()
  private user: User = null;

  // @Output()
  // private activateUser: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private usersService:UsersService
  ) {}

  public onActivate(): void {
    // this.activateUser.emit();
    this.usersService.onActivateUser(this.user);
  }

  public getUser(): User {
    return this.user;
  } 

}