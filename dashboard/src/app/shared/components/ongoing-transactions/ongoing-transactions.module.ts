import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OngoingTransactionsComponent } from './ongoing-transactions.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    OngoingTransactionsComponent
  ],
  exports: [
    OngoingTransactionsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    DividerModule,
    ButtonModule,
    DividerModule
  ]
})
export class OngoingTransactionsModule { }
