import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarsComponent } from './components/navbars/navbars.component';
import { HeadersComponent } from './components/headers/headers.component';
import { LoginPageComponent } from './pages/shared-pages/auth-pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/shared-pages/auth-pages/sign-up-page/sign-up-page.component';
import { MainHomeComponent } from './pages/shared-pages/main-home/main-home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './pages/admin-panel/admin-dashboard/admin-dashboard.component';
import { CreateCourseComponent } from './pages/admin-panel/create-course/create-course.component';
import { AdminHomeComponent } from './pages/admin-panel/admin-home/admin-home.component';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarsComponent,
    HeadersComponent,
    LoginPageComponent,
    SignUpPageComponent,
    MainHomeComponent,
    AdminDashboardComponent,
    CreateCourseComponent,
    AdminHomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
