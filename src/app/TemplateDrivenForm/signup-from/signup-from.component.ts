import { Component, OnInit } from "@angular/core";

import { SignupdataService } from "src/app/service/signupdata.service";

import {
  FormGroup,
  FormControl,
  FormsModule,
  Validators,
  ValidatorFn,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-signup-from",
  templateUrl: "./signup-from.component.html",
  styleUrls: ["./signup-from.component.css"]
})
export class SignupFromComponent implements OnInit {
  mygroup: FormGroup;

  constructor(private service: SignupdataService) {}

  handlesubmit(arg) {
    console.log(arg.value);

    this.service
      .postdata(arg.value)
      .subscribe(result => console.log(result), err => console.log(err));
    this.mygroup.reset();
  }

  update() {
    console.log(this.mygroup);
    this.mygroup.patchValue({
      uname: "Mr.Rohan",
      upassword: "1234",
      cpassword: "1234"
    });
  }
  ngOnInit() {
    this.mygroup = new FormGroup(
      {
        uname: new FormControl("rohan", [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)
        ]),
        uemail: new FormControl("reactiveform@gmail.com", [
          Validators.required,
          Validators.email
        ]),
        upassword: new FormControl("", [
          Validators.required,
          Validators.minLength(6)
        ]),
        cpassword: new FormControl("", [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15)
        ])
      },
      { validators: this.passwordmatch() }
    );
  }
  passwordmatch(): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } | null => {
      const upassword = group.controls.upassword.value;
      const cpassword = group.controls.cpassword.value;
      console.log(upassword, cpassword);
      return upassword === cpassword ? null : { mismatch: true };
    };
  }
  // handlesubmit(arg) {
  //   console.log(this.mygroup.value);

  // }
}
