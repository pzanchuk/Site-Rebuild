import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayliDealsComponent } from './dayli-deals.component';

describe('DayliDealsComponent', () => {
  let component: DayliDealsComponent;
  let fixture: ComponentFixture<DayliDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayliDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayliDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
