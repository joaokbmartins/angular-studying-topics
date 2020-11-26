import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'; 
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html'
})
export class ActiveUserComponent {

  @Input()
  private user: User = null;

  @Output()
  private deactivateUser: EventEmitter<void> = new EventEmitter<void>();

  public onDeactivate(): void { 
    this.deactivateUser.emit();
  }

  public getUser(): User {
    return this.user;
  }

}