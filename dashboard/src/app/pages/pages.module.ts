import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [],
  exports: [ HomeComponent ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule
  ]
})
export class PagesModule { }
