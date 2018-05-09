"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var url = 'http://192.168.43.175:8080/PurchaseRequest/';
var PurchaseRequestService = /** @class */ (function () {
    function PurchaseRequestService(http) {
        this.http = http;
    }
    PurchaseRequestService.prototype.list = function () {
        console.log("getting stuff");
        return this.http.get(url + 'List');
    };
    PurchaseRequestService.prototype.create = function (purchaserequest) {
        console.log('purchaserequestsvc.create...');
        return this.http.post(url + 'Add', purchaserequest);
    };
    PurchaseRequestService.prototype.get = function (id) {
        return this.http.get(url + 'Get?id=' + id);
    };
    PurchaseRequestService.prototype.remove = function (id) {
        return this.http.get(url + 'Remove?id=' + id);
    };
    PurchaseRequestService.prototype.change = function (purchaserequest) {
        return this.http.post(url + 'Change', purchaserequest);
    };
    PurchaseRequestService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PurchaseRequestService);
    return PurchaseRequestService;
}());
exports.PurchaseRequestService = PurchaseRequestService;
