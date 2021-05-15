import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from "../shared/shared.service";
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  message = ''  

  constructor(private shared : SharedService) { }

  ngOnInit(): void {
    this.message = this.shared.getMessage()
  }

}
