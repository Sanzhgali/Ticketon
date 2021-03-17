import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from '../app/registration/registration.component'
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'detail/:id', component: DetailComponent },
  { path: 'categories/:category', component: CategoryComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
