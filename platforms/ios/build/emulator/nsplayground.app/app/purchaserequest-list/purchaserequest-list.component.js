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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyY2hhc2VyZXF1ZXN0LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHVyY2hhc2VyZXF1ZXN0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELDhFQUEyRTtBQVMzRTtJQUtJLHNDQUFvQixLQUE2QjtRQUE3QixVQUFLLEdBQUwsS0FBSyxDQUF3QjtRQUpqRCxVQUFLLEdBQUcsc0JBQXNCLENBQUM7SUFNL0IsQ0FBQztJQUVELCtDQUFRLEdBQVI7UUFBQSxpQkFpQkM7UUFoQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUMzQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDSCxzREFBc0Q7UUFDdEQsMkNBQTJDO1FBQzNDLDRCQUE0QjtRQUM1QixrQ0FBa0M7UUFDbEMsb0NBQW9DO1FBQ3BDLDBEQUEwRDtRQUMxRCxxREFBcUQ7UUFDckQseURBQXlEO1FBQ3pELEVBQUU7UUFDRixZQUFZO1FBQ1osVUFBVTtJQUNkLENBQUM7SUExQlEsNEJBQTRCO1FBTnhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxXQUFXLEVBQUUsdUNBQXVDO1lBQ3BELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO1NBQ3JELENBQUM7eUNBTTZCLGdEQUFzQjtPQUx4Qyw0QkFBNEIsQ0EyQnhDO0lBQUQsbUNBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSxvRUFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQdXJjaGFzZVJlcXVlc3R9IGZyb20gXCJ+L21vZGVsL3B1cmNoYXNlcmVxdWVzdFwiO1xuaW1wb3J0IHsgVXNlcn0gZnJvbSBcIn4vbW9kZWwvdXNlclwiO1xuaW1wb3J0IHsgUHVyY2hhc2VSZXF1ZXN0U2VydmljZX0gZnJvbSBcIn4vc2VydmljZXMvcHVyY2hhc2VyZXF1ZXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCJ+L3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcHVyY2hhc2VyZXF1ZXN0LWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHVyY2hhc2VyZXF1ZXN0LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wdXJjaGFzZXJlcXVlc3QtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFB1cmNoYXNlcmVxdWVzdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRpdGxlID0gJ1B1cmNoYXNlUmVxdWVzdCBMaXN0JztcbiAgICBwdXJjaGFzZXJlcXVlc3RzOiBQdXJjaGFzZVJlcXVlc3RbXTtcbiAgICB1c2VyOiBVc2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwclN2YzogUHVyY2hhc2VSZXF1ZXN0U2VydmljZSxcbiAgICAgICAgICAgICAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dldHRpbmcgbGlzdCBvZiBwcnMuLi4nKTtcbiAgICAgICAgdGhpcy5wclN2Yy5saXN0KCkuc3Vic2NyaWJlKHBycyA9PiB7XG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlcmVxdWVzdHMgPSBwcnM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcnMpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gbW9jayBsb2dpbiAtIGhhcmRjb2RlZCBmb3Igbm93IGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4gICAgICAgIC8vIHRoaXMudXNlclN2Yy5sb2dpbihcInNibGVzc2luZ1wiLCBcImxvZ2luXCIpXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKHVzZXJzID0+IHtcbiAgICAgICAgLy8gICAgICAgICBpZiAodXNlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2Vyc1swXTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zeXNTdmMuZGF0YS51c2VyLmluc3RhbmNlID0gdGhpcy51c2VyO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnN5c1N2Yy5kYXRhLnVzZXIubG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN5c1N2YzpcIiwgdGhpcy5zeXNTdmMuZGVidWcpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==