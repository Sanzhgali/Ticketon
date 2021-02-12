import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    ResultComponent,
    LayoutComponent,
    FooterCompComponent,
    HeaderCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, AddRecordComponent, ResultComponent, HeaderCompComponent,  FooterCompComponent]
})
export class AppModule { }
