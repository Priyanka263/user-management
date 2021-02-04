import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUserComponent} from '../app/add-user/add-user.component'

const routes: Routes = [
  { path: '', redirectTo: '/addUser', pathMatch: 'full' },
  { path : 'addUser', component: AddUserComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
