import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { PurchaserequestListComponent} from "~/purchaserequest-list/purchaserequest-list.component";
import { AppRoutingModule } from "./app-routing.module";
import {PurchaseRequestService} from "~/services/purchaserequest.service";
import { AppComponent } from "./app.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        PurchaserequestListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        PurchaseRequestService
    ]
})
export class AppModule { }
