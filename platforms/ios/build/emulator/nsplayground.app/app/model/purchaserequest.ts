import {User} from './user';

export class PurchaseRequest {
  Id: number;
  User: User;
  Description: string;
  Justification: string;
  DateNeeded: string;
  DeliveryMode: string;
  Status: string;
  Total: number;
  submittedDate: Date;
  ReasonForRejection: string;


  constructor(Id: number, User: User, Description: string, Justification: string, DateNeeded: string,
              DeliveryMode: string, Status: string, Total: number, submittedDate: Date, ReasonForRejection: string) {
    this.Id = Id;
    this.User = User;
    this.Description = Description;
    this.Justification = Justification;
    this.DateNeeded = DateNeeded;
    this.DeliveryMode = DeliveryMode;
    this.Status = Status;
    this.Total = Total;
    this.submittedDate = submittedDate;
    this.ReasonForRejection = ReasonForRejection;
  }
}
