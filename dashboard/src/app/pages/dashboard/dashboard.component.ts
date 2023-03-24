import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Summary } from '../../shared/models/summary.model';
import { map, Observable } from 'rxjs';
import { Items } from '../../shared/models/items.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Table } from 'src/app/shared/components/basic-table/table.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  generalInfo!: Observable<Summary>;
  activityInfo!: Observable<Items[]>;
  cols: Table[] = [];

  constructor(
    private dashBoardService: DashboardService,
    private currency: CurrencyPipe,
    private date: DatePipe
  ) { }

  ngOnInit(): void {
    this.getGeneralInfo();
    this.getActivitylInfo();
    this.populateTable();
  }

  populateTable(): void {
    this.cols = [
      { field: 'date', header: 'Data', type: this.date, arg1: 'dd/MM/yy' },
      { field: 'paymentType', header: 'Tipo pag.' },
      { field: 'cardBrand', header: 'Bandeira' },
      { field: 'grossAmount', header: 'Bruto', type: this.currency },
      { field: 'netAmount', header: 'Liq.', type: this.currency },
      { field: 'action', header: '' },
    ];
  }

  getGeneralInfo(): void {
    this.generalInfo = this.dashBoardService.getTotalAmountOfSales().pipe( map(e => e));
  }

  getActivitylInfo(): void {
    this.activityInfo = this.dashBoardService.getLastActivities().pipe( map(e => e));
  }

}
