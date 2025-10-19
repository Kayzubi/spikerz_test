import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualRiskItemComponent } from './contextual-risk-item.component';

describe('ContextualRiskItemComponent', () => {
  let component: ContextualRiskItemComponent;
  let fixture: ComponentFixture<ContextualRiskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualRiskItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualRiskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
