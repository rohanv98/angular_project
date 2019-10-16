import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginFromComponent } from "./TemplateDrivenForm/login-from/login-from.component";
import { SignupFromComponent } from "./TemplateDrivenForm/signup-from/signup-from.component";
import { RegistrationFromComponent } from "./TemplateDrivenForm/registration-from/registration-from.component";
import { CanDeativeGuard } from "./guard/can-deative.guard";
import { CanactivateGuard } from "./guard/canactivate.guard";
import { from } from "rxjs";
import { RegistrationFromModule } from "../app/TemplateDrivenForm/registration-from/registration-from.module";
const routing: Routes = [
  {
    path: "loginpage",
    component: LoginFromComponent,
    pathMatch: "full"
  },
  {
    path: "singuppage",
    component: SignupFromComponent,
    canDeactivate: [CanDeativeGuard]
  },
  {
    path: "product",
    component: RegistrationFromComponent,
    canActivate: [CanactivateGuard]
  }
];

@NgModule({
  declarations: [AppComponent, LoginFromComponent, SignupFromComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routing),
    HttpClientModule,
    RegistrationFromModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
