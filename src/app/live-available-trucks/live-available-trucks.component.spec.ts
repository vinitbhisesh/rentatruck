import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAvailableTrucksComponent } from './live-available-trucks.component';

describe('LiveAvailableTrucksComponent', () => {
  let component: LiveAvailableTrucksComponent;
  let fixture: ComponentFixture<LiveAvailableTrucksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveAvailableTrucksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAvailableTrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
