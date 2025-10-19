import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetRiskItemComponent } from './asset-risk-item.component';

describe('AssetRiskItemComponent', () => {
  let component: AssetRiskItemComponent;
  let fixture: ComponentFixture<AssetRiskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetRiskItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetRiskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
