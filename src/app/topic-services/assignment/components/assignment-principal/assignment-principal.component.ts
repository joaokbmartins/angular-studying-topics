import { Component, OnInit } from '@angular/core';  
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-assignment-principal',
  templateUrl: './assignment-principal.component.html'
})
export class AssignmentPrincipalComponent implements OnInit{

  private activeUsers: Array<User> = new Array<User>();
  private inactiveUsers: Array<User> = new Array<User>();

  ngOnInit() {
    this.activeUsers.push(new User('teste1', true));
    this.activeUsers.push(new User('teste2', true));
    this.activeUsers.push(new User('teste3', true));
    
    this.inactiveUsers.push(new User('teste4', false));
    this.inactiveUsers.push(new User('teste5', false));
    this.inactiveUsers.push(new User('teste6', false));
  }

  public onDeactivateUser(index:number): void {
    let user:User = this.activeUsers.splice(index, 1)[0];
    this.inactiveUsers.push(user);
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