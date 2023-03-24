import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListboxModule } from 'primeng/listbox';
import { SideBarComponent } from './side-bar.component';



@NgModule({
  declarations: [ SideBarComponent ],
  exports: [ SideBarComponent ],
  imports: [
    CommonModule,
    ListboxModule,
    FormsModule,
    RouterModule
  ]
})
export class SideBarModule { }
