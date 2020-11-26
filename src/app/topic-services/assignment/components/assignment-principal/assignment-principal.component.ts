import { Component, OnInit } from '@angular/core';  
import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.services';

@Component({
  selector: 'app-assignment-principal',
  templateUrl: './assignment-principal.component.html',
  providers: [
    UsersService
  ]
})
export class AssignmentPrincipalComponent implements OnInit {

  private activeUsers: Array<User> = null;
  private inactiveUsers: Array<User> = null;

  public constructor(
    private usersService:UsersService
  ) {}
  
  public ngOnInit(): void {
    this.activeUsers = this.usersService.getActiveUsers();
    this.inactiveUsers = this.usersService.getInactiveUsers();
  }

  public onDeactivateUser(index:number): void {
    // let user:User = this.activeUsers.splice(index, 1)[0];
    // this.inactiveUsers.push(user);
    this.usersService.getDeactivateUser().subscribe();
  }

  public onActivateUser(index:number): void {
    let user:User = this.inactiveUsers.splice(index, 1)[0];
    this.activeUsers.push(user);
  }

  public getActiveUsers(): Array<User> {
    return this.activeUsers;
  }

  public getInactiveUsers(): Array<User> {
    return this.inactiveUsers;
  }
  
}