import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { AvatarModule } from 'primeng/avatar';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TopBarComponent
  ],
  exports: [TopBarComponent],
  imports: [
    CommonModule,
    AvatarModule,
    ListboxModule,
    FormsModule
  ]
})
export class TopBarModule { }
