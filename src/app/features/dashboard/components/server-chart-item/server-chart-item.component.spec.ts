import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerChartItemComponent } from './server-chart-item.component';

describe('ServerChartItemComponent', () => {
  let component: ServerChartItemComponent;
  let fixture: ComponentFixture<ServerChartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerChartItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerChartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
