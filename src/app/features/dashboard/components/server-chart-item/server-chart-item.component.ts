import { Component, input } from '@angular/core';
import { InfoItemComponent } from '../info-item/info-item.component';
import { HoverableDirective } from 'src/app/shared/hoverable.directive';
import { revealChildOnParentHover } from 'src/app/shared/shared-animations';

@Component({
  selector: 'app-server-chart-item',
  imports: [InfoItemComponent, HoverableDirective],
  templateUrl: './server-chart-item.component.html',
  styleUrl: './server-chart-item.component.css',
  animations: [
    revealChildOnParentHover
  ]
})
export class ServerChartItemComponent {
  icon = input.required<string>();
  infoTitle = input.required<string>();
  infoSubtitle = input<string>();
}
