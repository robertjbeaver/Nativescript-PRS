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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyY2hhc2VyZXF1ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdXJjaGFzZXJlcXVlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyw2Q0FBZ0Q7QUFHaEQsSUFBTSxHQUFHLEdBQUcsNkNBQTZDLENBQUM7QUFHMUQ7SUFtQkksZ0NBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBakJ6QyxxQ0FBSSxHQUFKO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBa0MsQ0FBQztJQUN4RSxDQUFDO0lBQ0QsdUNBQU0sR0FBTixVQUFPLGVBQWdDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxlQUFlLENBQW9CLENBQUM7SUFDM0UsQ0FBQztJQUNELG9DQUFHLEdBQUgsVUFBSSxFQUFFO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFrQyxDQUFDO0lBQ2hGLENBQUM7SUFDRCx1Q0FBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsWUFBWSxHQUFHLEVBQUUsQ0FBb0IsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsdUNBQU0sR0FBTixVQUFPLGVBQWdDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxFQUFFLGVBQWUsQ0FBb0IsQ0FBQztJQUM5RSxDQUFDO0lBbEJRLHNCQUFzQjtRQURsQyxpQkFBVSxFQUFFO3lDQW9CaUIsaUJBQVU7T0FuQjNCLHNCQUFzQixDQW9CbEM7SUFBRCw2QkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFB1cmNoYXNlUmVxdWVzdCB9IGZyb20gJy4uL21vZGVsL3B1cmNoYXNlcmVxdWVzdCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuXG5jb25zdCB1cmwgPSAnaHR0cDovLzE5Mi4xNjguNDMuMTc1OjgwODAvUHVyY2hhc2VSZXF1ZXN0Lyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQdXJjaGFzZVJlcXVlc3RTZXJ2aWNlIHtcblxuICAgIGxpc3QoKTogT2JzZXJ2YWJsZTxQdXJjaGFzZVJlcXVlc3RbXT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgc3R1ZmZcIik7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCArICdMaXN0JykgYXMgT2JzZXJ2YWJsZTxQdXJjaGFzZVJlcXVlc3RbXT47XG4gICAgfVxuICAgIGNyZWF0ZShwdXJjaGFzZXJlcXVlc3Q6IFB1cmNoYXNlUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwdXJjaGFzZXJlcXVlc3RzdmMuY3JlYXRlLi4uJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwgKyAnQWRkJywgcHVyY2hhc2VyZXF1ZXN0KSBhcyBPYnNlcnZhYmxlPGFueT47XG4gICAgfVxuICAgIGdldChpZCk6IE9ic2VydmFibGU8UHVyY2hhc2VSZXF1ZXN0W10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsICsgJ0dldD9pZD0nICsgaWQpIGFzIE9ic2VydmFibGU8UHVyY2hhc2VSZXF1ZXN0W10+O1xuICAgIH1cbiAgICByZW1vdmUoaWQpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwgKyAnUmVtb3ZlP2lkPScgKyBpZCkgYXMgT2JzZXJ2YWJsZTxhbnk+O1xuICAgIH1cbiAgICBjaGFuZ2UocHVyY2hhc2VyZXF1ZXN0OiBQdXJjaGFzZVJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsICsgJ0NoYW5nZScsIHB1cmNoYXNlcmVxdWVzdCkgYXMgT2JzZXJ2YWJsZTxhbnk+O1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxufVxuXG4iXX0=