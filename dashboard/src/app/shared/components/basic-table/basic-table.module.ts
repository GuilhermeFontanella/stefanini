import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { BasicTableComponent } from './basic-table.component';




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
  ],
  providers: [
    CurrencyPipe,
    DatePipe
  ]
})
export class BasicTableModule { }
