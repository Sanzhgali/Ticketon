import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import event from 'server/events.json';
import {SearchPipe} from '../pipes/search'

@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.scss']
})
export class HeaderCompComponent implements OnInit {
  
  

  
  searchText = '';

  typ: string = 'Defskiy';

  constructor() { }

  ngOnInit(): void {
    
  }

}
