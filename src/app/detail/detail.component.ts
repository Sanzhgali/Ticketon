import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import events from 'server/events.json';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  event: any = events;


  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const eventIdFromRoute = Number(routeParams.get('id'));

    this.event = events.find((event: { id: number; }) => event.id === eventIdFromRoute);
  }

}
