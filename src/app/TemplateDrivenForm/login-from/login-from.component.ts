import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-from",
  templateUrl: "./login-from.component.html",
  styleUrls: ["./login-from.component.css"]
})
export class LoginFromComponent implements OnInit {
  value = "rohan";
  constructor() {}
  // handling(arg) {
  //   this.value = arg;
  // }
  ngOnInit() {}
}
