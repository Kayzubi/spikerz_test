import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemidiationsComponent } from './remidiations.component';

describe('RemidiationsComponent', () => {
  let component: RemidiationsComponent;
  let fixture: ComponentFixture<RemidiationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemidiationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemidiationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
