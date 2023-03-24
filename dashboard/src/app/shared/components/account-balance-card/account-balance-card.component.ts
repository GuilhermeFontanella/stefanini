import { Component, Input, OnInit } from '@angular/core';
import { Summary } from '../../models/summary.model';

@Component({
  selector: 'app-account-balance-card',
  templateUrl: './account-balance-card.component.html',
  styleUrls: ['./account-balance-card.component.scss']
})
export class AccountBalanceCardComponent implements OnInit {
  @Input() data!: Summary | null;

  constructor() { }

  ngOnInit(): void {
  }

}
