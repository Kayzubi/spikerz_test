import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InfoItemComponent } from '../info-item/info-item.component';

@Component({
  selector: 'app-sever-info-tooltip',
  imports: [CardModule, InfoItemComponent],
  templateUrl: './sever-info-tooltip.component.html',
  styleUrl: './sever-info-tooltip.component.css'
})
export class SeverInfoTooltipComponent {

}
