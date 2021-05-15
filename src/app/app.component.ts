import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddRecordComponent } from './add-record/add-record.component';
import { ContactComponent } from './contact/contact.component';
import {HeaderCompComponent} from './header-comp/header-comp.component';
import {CarouselComponent} from './carousel/carousel.component';
import event from 'server/events.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']


})
export class AppComponent {
  title = 'jogging-diary';

  Events: any = event;  
  
}


