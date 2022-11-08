import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageModule } from './login/login.module';
import { LandingPageModule } from './landing/landing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginPageModule, LandingPageModule],
  exports: [LoginPageModule, LandingPageModule],
})
export class PagesModuleModule {}
