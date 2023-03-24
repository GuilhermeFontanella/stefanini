import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { AvatarModule } from 'primeng/avatar';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { SideBarModule } from '../side-bar/side-bar.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TopBarComponent
  ],
  exports: [TopBarComponent],
  imports: [
    CommonModule,
    AvatarModule,
    ListboxModule,
    FormsModule,
    RouterModule
  ]
})
export class TopBarModule { }
