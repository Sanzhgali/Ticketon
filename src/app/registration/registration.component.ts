import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent{

  email: FormControl = new FormControl();
  password: FormControl = new FormControl();

  
  log(x: any){ console.log(x); }
  
  
}
