import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { RemidiationsComponent } from '../../components/remidiations/remidiations.component';
import { ServerChartComponent } from '../../components/server-chart/server-chart.component';
import { RisksChartsComponent } from '../../components/risks-charts/risks-charts.component';


@Component({
  selector: 'app-home',
  imports: [CardModule, RemidiationsComponent, ServerChartComponent, RisksChartsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    infos = [

    ]

}
