import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './layouts/dash-board/dash-board.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { DashBoardListUserComponent } from './modules/dash-board-list-user/dash-board-list-user.component';
import { DashBoardPostsComponent } from './modules/dash-board-posts/dash-board-posts.component';
import { DetailPostComponent } from './modules/detail-post/detail-post.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { LoginComponent } from './modules/login/login.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { RegisterComponent } from './modules/register/register.component';


const routes: Routes = [
  {path: '', redirectTo: '/homePage', pathMatch: 'full'},
  {path: 'homePage',component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'posts/:id', component: DetailPostComponent},

  {path: 'dashboard',
  component: DashBoardComponent,
  children: [
    {
     path: 'list-user', component: DashBoardListUserComponent
  },{
   path: 'posts', component: DashBoardPostsComponent
  }]},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
