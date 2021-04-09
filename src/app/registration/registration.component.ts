import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  email: FormControl = new FormControl();
  password: FormControl = new FormControl();
  
  constructor() { }

  ngOnInit(): void {
  }

}
