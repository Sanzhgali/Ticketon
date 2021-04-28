import { Component, Input, OnInit } from '@angular/core';
import event from 'server/events.json';
import { pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  Events: any = event; 

  name: string | undefined;

  Search(){

    if (this.name != ""){
      this.Events = this.Events.filter((res: { name: { toLocaleLowerCase: () => { (): any; new(): any; match: { (arg0: string | undefined): any; new(): any; }; }; }; })=>{
        return res.name.toLocaleLowerCase().match(this.name?.toLocaleLowerCase());
      });
    }
    else{
      return this.ngOnInit();
    }
  }

  constructor() { }


  ngOnInit(): void {}



  }


