"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var url = 'http://localhost:8080/Users/';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.list = function () {
        return this.http.get(url + 'List');
    };
    UserService.prototype.create = function (user) {
        console.log('usersvc.create...');
        return this.http.post(url + 'Add', user);
    };
    UserService.prototype.get = function (id) {
        return this.http.get(url + 'Get?id=' + id);
    };
    UserService.prototype.remove = function (id) {
        return this.http.get(url + 'Remove?id=' + id);
    };
    UserService.prototype.change = function (user) {
        return this.http.post(url + 'Change', user);
    };
    UserService.prototype.login = function (uname, pwd) {
        return this.http.get(url + 'Authenticate?uname=' + uname + '&pwd=' + pwd);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDZDQUFnRDtBQUVoRCxJQUFNLEdBQUcsR0FBRyw4QkFBOEIsQ0FBQztBQUczQztJQW9CRSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFuQnpDLDBCQUFJLEdBQUo7UUFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBdUIsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsNEJBQU0sR0FBTixVQUFPLElBQVU7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFvQixDQUFDO0lBQzlELENBQUM7SUFDRCx5QkFBRyxHQUFILFVBQUksRUFBRTtRQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLEVBQUUsQ0FBdUIsQ0FBQztJQUNuRSxDQUFDO0lBQ0QsNEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFlBQVksR0FBRyxFQUFFLENBQW9CLENBQUM7SUFDbkUsQ0FBQztJQUNELDRCQUFNLEdBQU4sVUFBTyxJQUFVO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLEVBQUUsSUFBSSxDQUFvQixDQUFDO0lBQ2pFLENBQUM7SUFDRCwyQkFBSyxHQUFMLFVBQU0sS0FBYSxFQUFFLEdBQVc7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxxQkFBcUIsR0FBRyxLQUFLLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBdUIsQ0FBQztJQUNsRyxDQUFDO0lBbkJVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FxQmUsaUJBQVU7T0FwQnpCLFdBQVcsQ0FxQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJ9IGZyb20gJy4uL21vZGVsL3VzZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmNvbnN0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvVXNlcnMvJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgbGlzdCgpOiBPYnNlcnZhYmxlPFVzZXJbXT4ge1xuICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwgKyAnTGlzdCcpIGFzIE9ic2VydmFibGU8VXNlcltdPjtcbiAgfVxuICBjcmVhdGUodXNlcjogVXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc29sZS5sb2coJ3VzZXJzdmMuY3JlYXRlLi4uJyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCArICdBZGQnLCB1c2VyKSBhcyBPYnNlcnZhYmxlPGFueT47XG4gIH1cbiAgZ2V0KGlkKTogT2JzZXJ2YWJsZTxVc2VyW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwgKyAnR2V0P2lkPScgKyBpZCkgYXMgT2JzZXJ2YWJsZTxVc2VyW10+O1xuICB9XG4gIHJlbW92ZShpZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsICsgJ1JlbW92ZT9pZD0nICsgaWQpIGFzIE9ic2VydmFibGU8YW55PjtcbiAgfVxuICBjaGFuZ2UodXNlcjogVXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCArICdDaGFuZ2UnLCB1c2VyKSBhcyBPYnNlcnZhYmxlPGFueT47XG4gIH1cbiAgbG9naW4odW5hbWU6IHN0cmluZywgcHdkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXJbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCArICdBdXRoZW50aWNhdGU/dW5hbWU9JyArIHVuYW1lICsgJyZwd2Q9JyArIHB3ZCkgYXMgT2JzZXJ2YWJsZTxVc2VyW10+O1xuICB9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG59XG4iXX0=