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
