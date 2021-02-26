import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from './carousel/carousel.component';
import { EventsComponent } from './events/events.component';
import { AdditionalComponent } from './additional/additional.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    ResultComponent,
    LayoutComponent,
    HeaderCompComponent,
    CarouselComponent,
    EventsComponent,
    AdditionalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent, AddRecordComponent, ResultComponent, HeaderCompComponent, CarouselComponent, EventsComponent, AdditionalComponent]
})
export class AppModule { }