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
import { from } from "rxjs";

const routing: Routes = [
  { path: "", component: LoginFromComponent, pathMatch: "full" },
  { path: "singuppage", component: SignupFromComponent },
  { path: "product", component: RegistrationFromComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFromComponent,
    SignupFromComponent,
    RegistrationFromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routing),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
