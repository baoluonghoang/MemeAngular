import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardModule } from './layouts/dash-board/dash-board.module';
import { HomePageModule } from './layouts/home-page/home-page.module';
import { DetailPostComponent } from './modules/detail-post/detail-post.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { LoginComponent } from './modules/login/login.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { RegisterComponent } from './modules/register/register.component';
import { Auth } from './helpers/auth.guard.ts/auth.guard.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    DetailPostComponent,
    PageNotFoundComponent,
    Auth.Guard.TsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DashBoardModule,
    HomePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
