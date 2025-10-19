import { Component, input } from '@angular/core';

@Component({
  selector: 'app-contextual-risk-item',
  imports: [],
  templateUrl: './contextual-risk-item.component.html',
  styleUrl: './contextual-risk-item.component.css'
})
export class ContextualRiskItemComponent {
  status = input.required<'low' | 'medium' | 'high' | 'critical'>()
  total = input.required<number>()
}
