export class User {
  Id: number;
  UserName: string;
  Password: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  Email: string;
  Reviewer: boolean;
  Admin: boolean;
  constructor(Id: number = 0, UserName: string = '', Password: string = '', FirstName: string = '', LastName: string,
              PhoneNumber: string = '', Email: string = '', Reviewer: boolean = false, Admin: boolean = false) {
    this.Id = Id;
    this.UserName = UserName;
    this.Password = Password;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.PhoneNumber = PhoneNumber;
    this.Email = Email;
    this.Reviewer = Reviewer;
    this.Admin = Admin;
  }
  about(): string {
    return `UserName = ${this.UserName} FirstName=${this.FirstName} LastName=${this.LastName}`;
  }
}
