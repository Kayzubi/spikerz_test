import { Component } from '@angular/core';
import { CardModule } from "primeng/card";
import { AssetRiskItemComponent } from "../asset-risk-item/asset-risk-item.component";
import { Button } from "primeng/button";
import { ContextualRiskItemComponent } from "../contextual-risk-item/contextual-risk-item.component";

@Component({
  selector: 'app-risks-charts',
  imports: [CardModule, AssetRiskItemComponent, Button, ContextualRiskItemComponent],
  templateUrl: './risks-charts.component.html',
  styleUrl: './risks-charts.component.css'
})
export class RisksChartsComponent {

}
