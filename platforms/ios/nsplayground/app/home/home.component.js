"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, page) {
        this.router = router;
        this.page = page;
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        // Init your component properties here.
    };
    HomeComponent.prototype.begin = function () {
        this.router.navigate(["purchaserequest/list"]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
