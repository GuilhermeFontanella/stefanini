import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

import { OngoingTransactionsComponent } from './ongoing-transactions.component';

describe('OngoingTransactionsComponent', () => {
  let component: OngoingTransactionsComponent;
  let fixture: ComponentFixture<OngoingTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngoingTransactionsComponent ],
      imports: [
        CardModule,
        DividerModule,
        ButtonModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OngoingTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
