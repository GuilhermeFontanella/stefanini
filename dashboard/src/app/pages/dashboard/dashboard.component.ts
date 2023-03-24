import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

import { map, Observable } from 'rxjs';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DashboardService } from './dashboard.service';
import { DialogTemplateComponent } from 'src/app/shared/components/dialog-template/dialog-template.component'
import { Table } from 'src/app/shared/components/basic-table/table.model';
import { Summary } from 'src/app/shared/models/summary.model';
import { Items } from 'src/app/shared/models/items.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  generalInfo$!: Observable<Summary>;
  activityInfo$!: Observable<Items[]>;
  cols: Table[] = [];
  ref!: DynamicDialogRef;

  constructor(
    private dashBoardService: DashboardService,
    private currency: CurrencyPipe,
    private date: DatePipe, 
    private dialogService: DialogService
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

  getGeneralInfo(): any {
    this.generalInfo$ = this.dashBoardService.getTotalAmountOfSales()
      .pipe(map(e => { return e }));
  }

  getActivitylInfo(): void {
    this.activityInfo$ = this.dashBoardService.getLastActivities()
      .pipe(map(e => {return e}));
  }

  showDialog(event: any): void {
    this.ref = this.dialogService.open(DialogTemplateComponent,
      {
        header: 'Informação detalhada',
        width: '30%',
        baseZIndex: 10000,
        data: event  
      }
    )
  }
}
