"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PurchaseRequest = /** @class */ (function () {
    function PurchaseRequest(Id, User, Description, Justification, DateNeeded, DeliveryMode, Status, Total, submittedDate, ReasonForRejection) {
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
    return PurchaseRequest;
}());
exports.PurchaseRequest = PurchaseRequest;
