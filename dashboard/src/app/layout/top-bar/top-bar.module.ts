import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AvatarModule } from 'primeng/avatar';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { TopBarComponent } from './top-bar.component';
import { SideBarModule } from '../side-bar/side-bar.module';

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
    RouterModule,
    ButtonModule,
    SidebarModule,
    SideBarModule,
    ListboxModule,
    RouterModule
  ]
})
export class TopBarModule { }
