import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from '../app/registration/registration.component'
import { AddRecordComponent } from './add-record/add-record.component';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { DetailComponent } from './detail/detail.component';
import { EventDetailGuard } from './detail/event-detail.guard';
import { UnsavedInputGuard } from './registration/unsaved-input.guard';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
 

  { path: 'registration', canDeactivate: [UnsavedInputGuard], component: RegistrationComponent },

  { path: 'add-record', component: AddRecordComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full'},

  { path: 'detail/:id',  canActivate: [EventDetailGuard], component: DetailComponent},

  { path: 'categories/:category', component: CategoryComponent},

  { path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  { path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
