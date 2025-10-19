import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverAlertTooltipComponent } from './sever-alert-tooltip.component';

describe('SeverAlertTooltipComponent', () => {
  let component: SeverAlertTooltipComponent;
  let fixture: ComponentFixture<SeverAlertTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeverAlertTooltipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeverAlertTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
