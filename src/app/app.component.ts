import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddRecordComponent } from './add-record/add-record.component';
import { ResultComponent } from './result/result.component';
import {HeaderCompComponent} from './header-comp/header-comp.component';
import {CarouselComponent} from './carousel/carousel.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']


})
export class AppComponent {
  title = 'jogging-diary';
}


