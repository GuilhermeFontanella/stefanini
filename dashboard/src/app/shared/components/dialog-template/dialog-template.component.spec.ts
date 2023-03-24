import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';

import { DialogTemplateComponent } from './dialog-template.component';
import { Items } from 'src/app/shared/models/items.model';

describe('DialogTemplateComponent', () => {
  let component: DialogTemplateComponent;
  let fixture: ComponentFixture<DialogTemplateComponent>;
  let dialogRef: DynamicDialogRef;
  let dialogConfig: DynamicDialogConfig;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTemplateComponent ],
      imports: [
        DynamicDialogModule
      ],
      providers: [
        DynamicDialogRef,
        DynamicDialogConfig
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTemplateComponent);
    component = fixture.debugElement.componentInstance;
    dialogRef = TestBed.inject(DynamicDialogRef);
    dialogConfig = TestBed.inject(DynamicDialogConfig);
    dialogConfig.data = mockData;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize data with config.data', () => {
    component.data = dialogConfig.data
    expect(component.data?.cnpjRoot).toEqual(485116);
  });

  const mockData: Items = {
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
});
