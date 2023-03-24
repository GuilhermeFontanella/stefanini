import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AccountBalanceCardModule } from 'src/app/shared/components/account-balance-card/account-balance-card.module';
import { OngoingTransactionsModule } from 'src/app/shared/components/ongoing-transactions/ongoing-transactions.module';



@NgModule({
  declarations: [ DashboardComponent ],
  exports: [ DashboardComponent ],
  imports: [
    CommonModule,
    AccountBalanceCardModule,
    OngoingTransactionsModule
  ]
})
export class DashboardModule { }
