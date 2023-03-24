import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { of } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { BasicTableModule } from 'src/app/shared/components/basic-table/basic-table.module';
import { Summary } from 'src/app/shared/models/summary.model';
import { Items } from 'src/app/shared/models/items.model';
import { AccountBalanceCardModule } from 'src/app/shared/components/account-balance-card/account-balance-card.module';
import { OngoingTransactionsModule } from 'src/app/shared/components/ongoing-transactions/ongoing-transactions.module';
import { DialogTemplateComponent } from 'src/app/shared/components/dialog-template/dialog-template.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let service: Partial<DashboardService>
  let fixture: ComponentFixture<DashboardComponent>;
  let dialogService: Partial<DialogService>;

  beforeEach(() => {
    service = {
      getTotalAmountOfSales: () => {
        return of(mockResponseSummary)
      }, 
      getLastActivities: () => {
        return of(mockResponseItems)
      }
    };

    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        AccountBalanceCardModule,
        OngoingTransactionsModule,
        BasicTableModule,
        DynamicDialogModule,
        HttpClientModule,
        BrowserDynamicTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        DialogService,
        {
          provide: DashboardService,
          useValue: service
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    dialogService = TestBed.inject(DialogService);
    spyOn(dialogService, 'open').and.callFake(() => {});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should get general information - getGeneralInfo`, async () => {
    component.getGeneralInfo();
    component.generalInfo$.subscribe((result) => {
      expect(result.totalQuantity).toBe(1546)
    })
  });

  it(`should get activity info - getActivitylInfo`, async () => {
    component.getActivitylInfo();
    component.activityInfo$.subscribe((result) => {
      expect(result.length).toBe(1)
    })
  });

  it(`should showDialog`, () => {
    const data = { item: 'teste' };
    component.showDialog(data);
    expect(dialogService.open).toHaveBeenCalledWith(
      DialogTemplateComponent,
      {
        header: 'Informação detalhada',
        width: '30%',
        baseZIndex: 10000,
        data: data 
      }
    )
  });

  const mockResponseSummary: Summary = {
    totalQuantity:1546,
    totalAmount:313388,
    totalNetAmount:301847.02,
    totalAverageAmount:202.71,
    initialDate:"2021-05-26",
    finalDate:"2021-05-26"
  };

  const mockResponseItems: Items[] = [
    {
      id: "114606514478703", 
      merchantId: "2000463023",
      paymentNode: 485173,
      cnpjRoot: 485116,
      date: "2021-05-26T12:12:55",
      paymentType: "Crédito à vista",
      cardBrand: "Mastercard",
      authorizationCode: "378216",
      truncatedCardNumber: "1014",
      grossAmount: 80.0,
      netAmount: 76.88,
      terminal: "00032668",
      administrationFee: 3.9,
      channelCode: 15,
      channel: "Super Link / Digitada",
      withdrawAmount: 0.0,
      minimumMDRAmmount: -3.12,
      mdrTaxAmount: 0.0,
      mdrFeeAmount: -3.12,
      status: "Aprovada"
    }
  ]
});