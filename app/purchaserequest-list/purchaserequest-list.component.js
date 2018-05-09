"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var purchaserequest_service_1 = require("~/services/purchaserequest.service");
var PurchaserequestListComponent = /** @class */ (function () {
    function PurchaserequestListComponent(prSvc) {
        this.prSvc = prSvc;
        this.title = 'PurchaseRequest List';
    }
    PurchaserequestListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Getting list of prs...');
        this.prSvc.list().subscribe(function (prs) {
            _this.purchaserequests = prs;
            console.log(prs);
        });
        // mock login - hardcoded for now for testing purposes
        // this.userSvc.login("sblessing", "login")
        //     .subscribe(users => {
        //         if (users.length > 0) {
        //             this.user = users[0];
        //             this.sysSvc.data.user.instance = this.user;
        //             this.sysSvc.data.user.loggedIn = true;
        //             console.log("SysSvc:", this.sysSvc.debug);
        //
        //         }
        //     });
    };
    PurchaserequestListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-purchaserequest-list',
            templateUrl: './purchaserequest-list.component.html',
            styleUrls: ['./purchaserequest-list.component.scss']
        }),
        __metadata("design:paramtypes", [purchaserequest_service_1.PurchaseRequestService])
    ], PurchaserequestListComponent);
    return PurchaserequestListComponent;
}());
exports.PurchaserequestListComponent = PurchaserequestListComponent;
