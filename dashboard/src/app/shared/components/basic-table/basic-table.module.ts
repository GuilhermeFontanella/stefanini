import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './basic-table.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    BasicTableComponent
  ],
  exports: [
    BasicTableComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    ButtonModule
  ]
})
export class BasicTableModule { }
