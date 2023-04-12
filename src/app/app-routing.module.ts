import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './cci/login/login.component';
import { RegisterComponent } from './cci/register/register.component';
import { RegisterService } from './core/services/RegisterService';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    resolve: { products: RegisterService } 
  },

  { path: 'enrollment/:id', component: LoginComponent },

  {
    path: 'register',
    component: RegisterComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
