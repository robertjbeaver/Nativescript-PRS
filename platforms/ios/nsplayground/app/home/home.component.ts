import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    constructor(private router: Router,
                private page: Page) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        // Init your component properties here.
    }
    begin() {
        this.router.navigate(["purchaserequest/list"]);
    }
}
