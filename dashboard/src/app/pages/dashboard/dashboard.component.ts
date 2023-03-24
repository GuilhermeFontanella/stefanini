import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Summary } from '../../shared/models/summary.model';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  generalInfo!: Observable<Summary>;

  constructor(
    private dashBoardService: DashboardService,
  ) { }

  ngOnInit(): void {
    this.getGeneralInfo();
  }

  getGeneralInfo(): void {
    this.generalInfo = this.dashBoardService.getTotalAmountOfSales().pipe( map(e => e));
    console.log(this.generalInfo);
  }

}
