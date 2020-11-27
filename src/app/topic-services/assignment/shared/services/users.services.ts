import { Injectable } from "@angular/core";
import { User } from '../models/user.model';
import { SwitchLoggerService } from './switch-logger.service';

@Injectable()
export class UsersService {
 
  activeUsers: Array<User> = new Array<User>();
  inactiveUsers: Array<User> = new Array<User>();

  public constructor(
    private switchLoggerService:SwitchLoggerService
  ) {
    this.activeUsers.push(new User('teste1', true));
    this.activeUsers.push(new User('teste2', true));
    this.activeUsers.push(new User('teste3', true));
    
    this.inactiveUsers.push(new User('teste4', false));
    this.inactiveUsers.push(new User('teste5', false));
    this.inactiveUsers.push(new User('teste6', false));
  }

  getSwitchCounterValue() {
    return this.switchLoggerService.switchCounter;
  }

  public onDeactivateUser(user:User): void {
    let index:number = this.activeUsers.indexOf(user);
    this.activeUsers.splice(index, 1)[0];
    this.inactiveUsers.push(user); 
    this.switchLoggerService.addOne();
  }
  
  public onActivateUser(user:User): void {
    let index:number = this.inactiveUsers.indexOf(user);
    this.inactiveUsers.splice(index, 1)[0];
    this.activeUsers.push(user); 
    this.switchLoggerService.addOne();
  }
  
}