import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';

import { DashboardComponent } from './dashboard.component';
import { AccountBalanceCardModule } from 'src/app/shared/components/account-balance-card/account-balance-card.module';
import { OngoingTransactionsModule } from 'src/app/shared/components/ongoing-transactions/ongoing-transactions.module';
import { BasicTableModule } from 'src/app/shared/components/basic-table/basic-table.module';


@NgModule({
  declarations: [ DashboardComponent ],
  exports: [ DashboardComponent ],
  imports: [
    CommonModule,
    DynamicDialogModule,
    AccountBalanceCardModule,
    OngoingTransactionsModule,
    BasicTableModule,
  ],
  providers: [
    DialogService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardModule { }
