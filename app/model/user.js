"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(Id, UserName, Password, FirstName, LastName, PhoneNumber, Email, Reviewer, Admin) {
        if (Id === void 0) { Id = 0; }
        if (UserName === void 0) { UserName = ''; }
        if (Password === void 0) { Password = ''; }
        if (FirstName === void 0) { FirstName = ''; }
        if (PhoneNumber === void 0) { PhoneNumber = ''; }
        if (Email === void 0) { Email = ''; }
        if (Reviewer === void 0) { Reviewer = false; }
        if (Admin === void 0) { Admin = false; }
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
    User.prototype.about = function () {
        return "UserName = " + this.UserName + " FirstName=" + this.FirstName + " LastName=" + this.LastName;
    };
    return User;
}());
exports.User = User;
