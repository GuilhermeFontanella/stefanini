import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

import { AccountBalanceCardComponent } from './account-balance-card.component';

describe('AccountBalanceCardComponent', () => {
  let component: AccountBalanceCardComponent;
  let fixture: ComponentFixture<AccountBalanceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountBalanceCardComponent ],
      imports: [
        BrowserDynamicTestingModule,
        HttpClientTestingModule,
        CardModule,
        DividerModule,
        ButtonModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountBalanceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
