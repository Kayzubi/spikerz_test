import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerChartComponent } from './server-chart.component';

describe('ServerChartComponent', () => {
  let component: ServerChartComponent;
  let fixture: ComponentFixture<ServerChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
