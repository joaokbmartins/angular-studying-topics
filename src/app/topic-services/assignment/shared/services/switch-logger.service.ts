import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SwitchLoggerService {
  switchCounter:number = 0;
  
  public addOne(): void {
    this.switchCounter++;
    console.log(this.switchCounter);
  }
}