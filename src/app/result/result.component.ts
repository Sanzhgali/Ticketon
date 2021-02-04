import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from "../shared/shared.service";
@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  message = ''  

  constructor(private shared : SharedService) { }

  ngOnInit(): void {
    this.message = this.shared.getMessage()
  }

}
