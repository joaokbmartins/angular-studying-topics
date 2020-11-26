export class Account {
 
  constructor(private name:string, private status:string) { 
    this.name = name;
    this.status = status;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string): void {
    this.status = status;
  }
  
}