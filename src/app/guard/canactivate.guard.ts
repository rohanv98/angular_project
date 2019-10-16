import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  ActivatedRoute,
  Router
} from "@angular/router";
import { Observable } from "rxjs";

import { SignupdataService } from "../service/signupdata.service";

@Injectable({
  providedIn: "root"
})
export class CanactivateGuard implements CanActivate {
  constructor(private service: SignupdataService, private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.service.isAuth) {
      this.route.navigate(["/loginpage"]);
    }
    return this.service.isAuth;
  }
}
