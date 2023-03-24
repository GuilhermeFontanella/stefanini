import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountBalanceCardComponent } from './account-balance-card.component';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AccountBalanceCardComponent
  ],
  exports: [
    AccountBalanceCardComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    DividerModule,
    ButtonModule
  ]
})
export class AccountBalanceCardModule { }
