import { EventEmitter, Injectable, OnInit, Output } from "@angular/core";
import { User } from '../models/user.model';

@Injectable()
export class UsersService implements OnInit {
 
  private activeUsers: Array<User> = new Array<User>();
  private inactiveUsers: Array<User> = new Array<User>();
 
  private deactivateUser: EventEmitter<void> = new EventEmitter<void>();

  public onDeactivateUser(index:number): void {
    let user:User = this.activeUsers.splice(index, 1)[0];
    this.inactiveUsers.push(user);
  }

  public ngOnInit():void {
    this.activeUsers.push(new User('teste1', true));
    this.activeUsers.push(new User('teste2', true));
    this.activeUsers.push(new User('teste3', true));
    
    this.inactiveUsers.push(new User('teste4', false));
    this.inactiveUsers.push(new User('teste5', false));
    this.inactiveUsers.push(new User('teste6', false));
  }

  public onActivateUser(index:number): void {
    let user:User = this.inactiveUsers.splice(index, 1)[0];
    this.activeUsers.push(user);
  }

  public getDeactivateUser(): EventEmitter<void> {
    console.log("event triggered");
    return this.deactivateUser;
  }

  public getActiveUsers(): Array<User> {
    return this.activeUsers;
  }

  public getInactiveUsers(): Array<User> {
    return this.inactiveUsers;
  }
}