import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationComponent } from '../registration/registration.component';
@Injectable({
  providedIn: 'root'
})
export class UnsavedInputGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: RegistrationComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.email.dirty || component.password.dirty){
        return window.confirm("You have not submitted your data, are you sure you want to leave this page?")
      }
    return true;
  }
  
}
