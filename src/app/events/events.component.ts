import { Component, Input, OnInit } from '@angular/core';
import event from 'server/events.json';
import {CategoryService} from '../category.service'
import { pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  Events: any = event; 
  constructor(public category: CategoryService) { }
  
  public typ: string = '';

  ngOnInit(): void {
    
    this.category.sendData.pipe(switchMap(() => this.category.setValue))
    .subscribe(data => {
      this.typ = data
      console.log(this.typ);
    });
}

  }


