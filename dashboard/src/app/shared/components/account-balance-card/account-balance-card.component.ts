import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Summary } from '../../models/summary.model';

@Component({
  selector: 'app-account-balance-card',
  templateUrl: './account-balance-card.component.html',
  styleUrls: ['./account-balance-card.component.scss']
})
export class AccountBalanceCardComponent implements OnInit {
  @Output() clickEvent = new EventEmitter();
  @Input() data!: Summary | null;
  @Input() subheader = 'Adicione Saldo e veja suas transações';

  constructor() { }

  ngOnInit(): void {
  }

}
