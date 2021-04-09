import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import events from 'server/events.json';

@Injectable({
  providedIn: 'root'
})
export class EventDetailGuard implements CanActivate {
  
  constructor(private router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const id = Number(route.paramMap.get('id'));
      const max_id = Number(events[events.length - 1]['id']);
      
      if (isNaN(id) || id < 1 || id > max_id){

        alert('Invalid event id!');
        this.router.navigate(['/home']);
        return false;
      
      } 
      
      return true;
  }
  
}
