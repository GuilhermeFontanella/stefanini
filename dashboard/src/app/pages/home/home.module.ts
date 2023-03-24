import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashboardModule } from '../dashboard/dashboard.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [ HomeComponent ],
  imports: [
    CommonModule,
    DashboardModule
  ]
})
export class HomeModule { }
