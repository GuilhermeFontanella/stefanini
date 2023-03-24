import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {
  @Output() clickEvent = new EventEmitter();
  @Input() data: any[] = [];
  @Input() cols: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'action', header: '' },
    ];

    this.data = [
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60, action: 'edit', icon: 'pi pi-pencil' },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
      { code: '1234', name: 'bileco', category: 'grosso', quantity: 60 },
    ]
  }

  itemSelected(data: any) {
    this.clickEvent.emit(data);
  }

}
