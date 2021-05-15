import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import events from 'server/events.json';

@Component({
  selector: 'add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent{

  myForm = new FormControl ();
  event: any = events;

  getPrice(eventId){
      this.event = events.find((event: { id: number; }) => event.id === eventId);

      return this.event.price;
  }

  getOverall(x, y){
    this.event = events.find((event: { id: number; }) => event.id === x);

    return this.event.price * y;
  }
 

};
