import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {SharedService} from "../shared/shared.service"
@Component({
  selector: 'add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent implements OnInit {

  constructor(private shared : SharedService) { }

  message = "Hey I am recorder!"

  ngOnInit(): void {
    this.shared.setMessage(this.message)
    
  } 

  

 
}
