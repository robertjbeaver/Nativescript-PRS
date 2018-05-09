import { Component, OnInit } from '@angular/core';
import {PurchaseRequest} from "~/model/purchaserequest";
import { User} from "~/model/user";
import { PurchaseRequestService} from "~/services/purchaserequest.service";
import {UserService} from "~/services/user.service";

@Component({
  moduleId: module.id,
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.scss']
})
export class PurchaserequestListComponent implements OnInit {
    title = 'PurchaseRequest List';
    purchaserequests: PurchaseRequest[];
    user: User;

    constructor(private prSvc: PurchaseRequestService,
                ) {
    }

    ngOnInit() {
        console.log('Getting list of prs...');
        this.prSvc.list().subscribe(prs => {
            this.purchaserequests = prs;
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
    }
}
