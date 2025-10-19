import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisksChartsComponent } from './risks-charts.component';

describe('RisksChartsComponent', () => {
  let component: RisksChartsComponent;
  let fixture: ComponentFixture<RisksChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RisksChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RisksChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
