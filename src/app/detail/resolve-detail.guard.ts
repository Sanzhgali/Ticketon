import { Injectable } from '@angular/core';
import { Resolve, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import events from 'server/events.json';



interface Event{
  id: number;
  location: string;
  name: string;
  
}

export class ServerResolver implements Resolve<Event> {
constructor( private route: ActivatedRoute) {}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event> | Promise<Event> | Event {


  const routeParams = this.route.snapshot.paramMap;
  const eventIdFromRoute = Number(routeParams.get('id'));

  return events.find((event: { id: number; }) => event.id === eventIdFromRoute);;

  }
}
