import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverInfoTooltipComponent } from './sever-info-tooltip.component';

describe('SeverInfoTooltipComponent', () => {
  let component: SeverInfoTooltipComponent;
  let fixture: ComponentFixture<SeverInfoTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeverInfoTooltipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeverInfoTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
