import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import { Component } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class CanDeativeGuard implements CanDeactivate<any>{

  canDeactivate(SignupFromComponent:Component){
    return window.confirm("Are you sure to navigate to other page...!");
  }
}  
