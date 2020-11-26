import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoggingService {

  public logNewStatus(newStatus:string) {
    console.log("Account status changed: " + newStatus);
  }
  
}