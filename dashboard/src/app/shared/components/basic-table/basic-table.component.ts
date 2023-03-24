import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {
  @Output() clickEvent = new EventEmitter();
  @Input() data!: any;
  @Input() cols: any[] = [];

  constructor() { }

  ngOnInit(): void {}

  itemSelected(data: any) {
    this.clickEvent.emit(data);
  }

}
