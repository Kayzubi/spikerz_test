import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemidiationItemComponent } from './remidiation-item.component';

describe('RemidiationItemComponent', () => {
  let component: RemidiationItemComponent;
  let fixture: ComponentFixture<RemidiationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemidiationItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemidiationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
