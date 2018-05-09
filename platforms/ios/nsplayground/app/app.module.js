"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var purchaserequest_list_component_1 = require("~/purchaserequest-list/purchaserequest-list.component");
var app_routing_module_1 = require("./app-routing.module");
var purchaserequest_service_1 = require("~/services/purchaserequest.service");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule
            ],
            declarations: [
                app_component_1.AppComponent,
                purchaserequest_list_component_1.PurchaserequestListComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                purchaserequest_service_1.PurchaseRequestService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
