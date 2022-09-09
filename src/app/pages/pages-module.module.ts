import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageModule } from './home/home.module';
import { LandingPageModule } from './landing/landing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule,HomePageModule, LandingPageModule],
  exports: [HomePageModule, LandingPageModule],
})
export class PagesModuleModule {}
