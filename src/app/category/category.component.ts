import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import events from 'server/events.json';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  event: any = events;

  constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const eventCtFromRoute = String(routeParams.get('category'));

    this.event = events.find((event: { category: string; }) => event.category === eventCtFromRoute);

  }

}
