import { Component, input } from '@angular/core';
import { InfoItemComponent } from '../info-item/info-item.component';
import { Asset } from '../risks-charts/risks-charts.component';

@Component({
  selector: 'app-asset-risk-item',
  imports: [InfoItemComponent],
  templateUrl: './asset-risk-item.component.html',
  styleUrl: './asset-risk-item.component.css'
})
export class AssetRiskItemComponent {
  asset = input.required<Asset>()
}
