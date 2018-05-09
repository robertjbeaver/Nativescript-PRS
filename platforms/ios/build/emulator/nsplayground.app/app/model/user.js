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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQVVFLGNBQVksRUFBYyxFQUFFLFFBQXFCLEVBQUUsUUFBcUIsRUFBRSxTQUFzQixFQUFFLFFBQWdCLEVBQ3RHLFdBQXdCLEVBQUUsS0FBa0IsRUFBRSxRQUF5QixFQUFFLEtBQXNCO1FBRC9GLG1CQUFBLEVBQUEsTUFBYztRQUFFLHlCQUFBLEVBQUEsYUFBcUI7UUFBRSx5QkFBQSxFQUFBLGFBQXFCO1FBQUUsMEJBQUEsRUFBQSxjQUFzQjtRQUNwRiw0QkFBQSxFQUFBLGdCQUF3QjtRQUFFLHNCQUFBLEVBQUEsVUFBa0I7UUFBRSx5QkFBQSxFQUFBLGdCQUF5QjtRQUFFLHNCQUFBLEVBQUEsYUFBc0I7UUFDekcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0JBQUssR0FBTDtRQUNFLE1BQU0sQ0FBQyxnQkFBYyxJQUFJLENBQUMsUUFBUSxtQkFBYyxJQUFJLENBQUMsU0FBUyxrQkFBYSxJQUFJLENBQUMsUUFBVSxDQUFDO0lBQzdGLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgSWQ6IG51bWJlcjtcbiAgVXNlck5hbWU6IHN0cmluZztcbiAgUGFzc3dvcmQ6IHN0cmluZztcbiAgRmlyc3ROYW1lOiBzdHJpbmc7XG4gIExhc3ROYW1lOiBzdHJpbmc7XG4gIFBob25lTnVtYmVyOiBzdHJpbmc7XG4gIEVtYWlsOiBzdHJpbmc7XG4gIFJldmlld2VyOiBib29sZWFuO1xuICBBZG1pbjogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoSWQ6IG51bWJlciA9IDAsIFVzZXJOYW1lOiBzdHJpbmcgPSAnJywgUGFzc3dvcmQ6IHN0cmluZyA9ICcnLCBGaXJzdE5hbWU6IHN0cmluZyA9ICcnLCBMYXN0TmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICBQaG9uZU51bWJlcjogc3RyaW5nID0gJycsIEVtYWlsOiBzdHJpbmcgPSAnJywgUmV2aWV3ZXI6IGJvb2xlYW4gPSBmYWxzZSwgQWRtaW46IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHRoaXMuSWQgPSBJZDtcbiAgICB0aGlzLlVzZXJOYW1lID0gVXNlck5hbWU7XG4gICAgdGhpcy5QYXNzd29yZCA9IFBhc3N3b3JkO1xuICAgIHRoaXMuRmlyc3ROYW1lID0gRmlyc3ROYW1lO1xuICAgIHRoaXMuTGFzdE5hbWUgPSBMYXN0TmFtZTtcbiAgICB0aGlzLlBob25lTnVtYmVyID0gUGhvbmVOdW1iZXI7XG4gICAgdGhpcy5FbWFpbCA9IEVtYWlsO1xuICAgIHRoaXMuUmV2aWV3ZXIgPSBSZXZpZXdlcjtcbiAgICB0aGlzLkFkbWluID0gQWRtaW47XG4gIH1cbiAgYWJvdXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFVzZXJOYW1lID0gJHt0aGlzLlVzZXJOYW1lfSBGaXJzdE5hbWU9JHt0aGlzLkZpcnN0TmFtZX0gTGFzdE5hbWU9JHt0aGlzLkxhc3ROYW1lfWA7XG4gIH1cbn1cbiJdfQ==