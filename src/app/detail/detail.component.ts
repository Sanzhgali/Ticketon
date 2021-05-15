import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import events from 'server/events.json';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap'
import {FormControl} from '@angular/forms'

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  closeResult: string;
  event: any = events;


  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    
  ) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const eventIdFromRoute = Number(routeParams.get('id'));

    this.event = events.find((event: { id: number; }) => event.id === eventIdFromRoute);
  }

  
}
