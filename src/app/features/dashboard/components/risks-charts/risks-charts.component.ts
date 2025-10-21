import { Component, signal, computed } from '@angular/core';
import { CardModule } from "primeng/card";
import { AssetRiskItemComponent } from "../asset-risk-item/asset-risk-item.component";
import { Button } from "primeng/button";
import { ContextualRiskItemComponent } from "../contextual-risk-item/contextual-risk-item.component";

type RiskLevel = 'critical' | 'high' | 'medium' | 'low';

export interface Asset {
  name: string;
  risk: RiskLevel;
}

const DUMMY_ASSETS: Asset[] = [
  {  name: 'Loremipsumdolor-1', risk: 'critical' },
  {  name: 'Loremipsumdolor-2', risk: 'critical' },
  { name: 'Loremipsumdolor-3', risk: 'critical' },
  {  name: 'Loremipsumdolor-4', risk: 'critical' },
];


@Component({
  selector: 'app-risks-charts',
  imports: [
    CardModule,
    AssetRiskItemComponent,
    Button,
    ContextualRiskItemComponent,
  ],
  templateUrl: './risks-charts.component.html',
  styleUrl: './risks-charts.component.css',
})
export class RisksChartsComponent {
  private assets = signal<Asset[]>(DUMMY_ASSETS);

  pageSize = signal(2);
  page = signal(1);

  total = computed(() => this.assets().length);
  totalPages = computed(() =>
    Math.max(1, Math.ceil(this.total() / this.pageSize())),
  );

  startIndex = computed(() => (this.page() - 1) * this.pageSize());
  endIndex = computed(() =>
    Math.min(this.startIndex() + this.pageSize(), this.total()),
  );

  pagedAssets = computed(() =>
    this.assets().slice(this.startIndex(), this.endIndex()),
  );

  nextPage() {
    if (this.page() < this.totalPages()) this.page.update((p) => p + 1);
  }
  prevPage() {
    if (this.page() > 1) this.page.update((p) => p - 1);
  }
}
