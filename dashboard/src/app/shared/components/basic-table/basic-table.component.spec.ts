import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

import { BasicTableComponent } from './basic-table.component';

describe('BasicTableComponent', () => {
  let component: BasicTableComponent;
  let fixture: ComponentFixture<BasicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicTableComponent ],
      imports: [
        BrowserDynamicTestingModule,
        HttpClientTestingModule,
        CardModule,
        TableModule,
        ButtonModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the selected data - itemSelected', () => {
    const data = { id: 1, name: 'Test' };
    spyOn(component.clickEvent, 'emit');
    component.itemSelected(data);
    expect(component.clickEvent.emit).toHaveBeenCalledWith(data);
  });

});
