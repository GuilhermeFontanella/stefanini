import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarModule } from './top-bar/top-bar.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarModule } from './side-bar/side-bar.module';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [],
  exports: [
    TopBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    TopBarModule,
    SideBarModule,
  ]
})
export class LayoutModule { }
