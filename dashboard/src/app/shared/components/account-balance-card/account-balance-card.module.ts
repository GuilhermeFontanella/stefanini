import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

import { AccountBalanceCardComponent } from './account-balance-card.component';


@NgModule({
  declarations: [ AccountBalanceCardComponent ],
  exports: [ AccountBalanceCardComponent ],
  imports: [
    CommonModule,
    CardModule,
    DividerModule,
    ButtonModule
  ]
})
export class AccountBalanceCardModule { }
