import { Component, OnInit } from '@angular/core';
import event from 'server/events.json';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  Events: any = event; 
  constructor() { }

  ngOnInit(): void {
  }

}
