import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';



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
