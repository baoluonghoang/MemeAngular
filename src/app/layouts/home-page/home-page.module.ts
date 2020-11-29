import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HomePageContentComponent } from 'src/app/modules/home-page-content/home-page-content.component';
import { HomePageSideBarComponent } from 'src/app/modules/home-page-side-bar/home-page-side-bar.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { HomePageComponent } from './home-page.component';



@NgModule({
  declarations: [
    HomePageContentComponent,
    HomePageSideBarComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class HomePageModule { }
