import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DashboardService } from './dashboard.service';

import { Summary } from 'src/app/shared/models/summary.model';
import { Items } from 'src/app/shared/models/items.model';

describe('DashboardService', () => {
  let service: DashboardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardService]
    });
    service = TestBed.inject(DashboardService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get total ammount of sales - getTotalAmountOfSales', () => {
    service.getTotalAmountOfSales().subscribe((response) => {
      expect(response.totalQuantity).toBe(1546)
    });

    const req = httpMock.expectOne('http://localhost:3000/summary');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponseSummary);
    httpMock.verify();
  });

  it('should get last activities - getLastActivities', () => {
    service.getLastActivities().subscribe((response) => {
      expect(response.length).toBe(1)
    });

    const req = httpMock.expectOne('http://localhost:3000/items');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponseItems);
    httpMock.verify();
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
