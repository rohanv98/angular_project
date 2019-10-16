import { Component, OnInit } from "@angular/core";

import{SignupdataService} from 'src/app/service/signupdata.service';

@Component({
  selector: "app-login-from",
  templateUrl: "./login-from.component.html",
  styleUrls: ["./login-from.component.css"]
})
export class LoginFromComponent implements OnInit {
  value = "rohan";
  constructor(private service:SignupdataService) {}
  // handling(arg) {
  //   this.value = arg;
  // }
  submit(arg) {
    console.log(arg.value);

    this.service.postdata2(arg.value).subscribe();
  
  }
  ngOnInit() {}
}
