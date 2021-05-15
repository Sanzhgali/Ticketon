import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { ContactComponent} from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from './carousel/carousel.component';
import { EventsComponent } from './events/events.component';
import { AdditionalComponent } from './additional/additional.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { CategoryComponent } from './category/category.component';
import {ReactiveFormsModule} from '@angular/forms'
import {SearchPipe} from '../app/pipes/search'


@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    ContactComponent,
    LayoutComponent,
    HeaderCompComponent,
    CarouselComponent,
    EventsComponent,
    AdditionalComponent,
    FooterComponent,
    RegistrationComponent,
    MainComponent,
    DetailComponent,
    CategoryComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent, AddRecordComponent, ContactComponent, HeaderCompComponent, CarouselComponent, EventsComponent, AdditionalComponent, RegistrationComponent, MainComponent]
})
export class AppModule { }
