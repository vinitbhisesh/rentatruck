import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTripComponent } from './order-trip.component';

describe('OrderTripComponent', () => {
  let component: OrderTripComponent;
  let fixture: ComponentFixture<OrderTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
