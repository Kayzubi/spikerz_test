import { Component } from '@angular/core';
import { ServerChartItemComponent } from "../server-chart-item/server-chart-item.component";
import { chartIcons, iconsRoute } from '@assets';
import { StatusItemComponent } from '../status-item/status-item.component';
import { VulnerabilityTooltipComponent } from '../vulnerability-tooltip/vulnerability-tooltip.component';
import { SeverInfoTooltipComponent } from '../sever-info-tooltip/sever-info-tooltip.component'


@Component({
  selector: 'app-server-chart',
  imports: [ServerChartItemComponent, StatusItemComponent, VulnerabilityTooltipComponent, SeverInfoTooltipComponent],
  templateUrl: './server-chart.component.html',
  styleUrl: './server-chart.component.css'
})
export class ServerChartComponent {
  chartIconsRoute = iconsRoute
  icons = chartIcons

}
