import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './pages/admin-panel/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './pages/admin-panel/admin-home/admin-home.component';
import { CreateCourseComponent } from './pages/admin-panel/create-course/create-course.component';
import { EmployeeCrateComponent } from './pages/mysql-practice/employee-crate/employee-crate.component';
import { EmployeeViewComponent } from './pages/mysql-practice/employee-view/employee-view.component';
import { LoginPageComponent } from './pages/shared-pages/auth-pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/shared-pages/auth-pages/sign-up-page/sign-up-page.component';
import { MainHomeComponent } from './pages/shared-pages/main-home/main-home.component';

const routes: Routes = [
  {path: '',  component: MainHomeComponent},
  {path: 'login',  component: LoginPageComponent},
  {path: 'sign-up',  component: SignUpPageComponent},
  {path: 'Admin-dashboard',  component: AdminDashboardComponent,
  children:[
    {path: 'Admin-home',  component: AdminHomeComponent},
    {path: 'create-course',  component: CreateCourseComponent},
    {path: 'employee-view',  component: EmployeeViewComponent},
    {path: 'employee-create',  component: EmployeeCrateComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
