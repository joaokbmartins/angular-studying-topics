import { Component, OnInit } from '@angular/core';  
import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.services';

@Component({
  selector: 'app-assignment-principal',
  templateUrl: './assignment-principal.component.html',
  providers: [
    // UsersService
  ]
})
export class AssignmentPrincipalComponent implements OnInit {

  user: User = null; 
  activeUsers: Array<User> = null;
  inactiveUsers: Array<User> = null;

  public constructor(
    private usersService:UsersService
  ) { }
  
  getCouterValue(): number {
    return this.usersService.getSwitchCounterValue();
  }
  
  public ngOnInit(): void { 
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  public onDeactivateUser(index:number): void {
    // let user:User = this.activeUsers.splice(index, 1)[0];
    // this.inactiveUsers.push(user);
    this.usersService.onActivateUser(this.user);
  }

  public onActivateUser(index:number): void {
    let user:User = this.inactiveUsers.splice(index, 1)[0];
    this.activeUsers.push(user);
  }
 
}