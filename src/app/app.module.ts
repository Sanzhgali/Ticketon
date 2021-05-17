import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { ContactComponent} from './contact/contact.component';
import { FormsModule } from '@angular/forms';
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
import {SearchPipe} from '../app/pipes/search';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserService } from './shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    ContactComponent,
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
    FlexLayoutModule,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [],
  providers: [UserService,AuthGuard,
    ,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent, AddRecordComponent, ContactComponent, HeaderCompComponent, CarouselComponent, EventsComponent, AdditionalComponent, RegistrationComponent, MainComponent]
})
export class AppModule { }
