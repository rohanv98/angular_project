import { Component, OnInit } from "@angular/core";
import { SignupdataService } from "src/app/service/signupdata.service";

@Component({
  selector: "app-registration-from",
  templateUrl: "./registration-from.component.html",
  styleUrls: ["./registration-from.component.css"]
})
export class RegistrationFromComponent implements OnInit {
  clients = [];
  constructor(private service: SignupdataService) {}

  ngOnInit() {
    this.service.getdata().subscribe(data => (this.clients = data));
  }
}
