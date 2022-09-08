import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/shared-pages/auth-pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/shared-pages/auth-pages/sign-up-page/sign-up-page.component';
import { MainHomeComponent } from './pages/shared-pages/main-home/main-home.component';

const routes: Routes = [
  {path: '',  component: MainHomeComponent},
  {path: 'login',  component: LoginPageComponent},
  {path: 'sign-up',  component: SignUpPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
