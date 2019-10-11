import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAvailableLoadsComponent } from './live-available-loads.component';

describe('LiveAvailableLoadsComponent', () => {
  let component: LiveAvailableLoadsComponent;
  let fixture: ComponentFixture<LiveAvailableLoadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveAvailableLoadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAvailableLoadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
