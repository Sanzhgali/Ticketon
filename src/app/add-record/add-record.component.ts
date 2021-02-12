import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {SharedService} from "../shared/shared.service"
@Component({
  selector: 'add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  date = "12/21/2020"
  dist = 0
  time = 0

};
