import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CategoryService} from '../category.service'
import event from 'server/events.json';

@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.scss']
})
export class HeaderCompComponent implements OnInit {
  

  Events: any = event; 
  
  typ: string = 'Defskiy';

  constructor(public category:CategoryService) { }
  
  categoryName(name: any){
    
    this.typ = name;
    console.log(this.typ);
    this.category.data$.next(this.typ);

  }




  sendCategory(example: any){
    this.category.data$.next(example);
    console.log(example);
  }

  ngOnInit(): void {
    
  }

}
