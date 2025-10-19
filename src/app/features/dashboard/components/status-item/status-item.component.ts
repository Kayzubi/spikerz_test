import { Component, input } from '@angular/core';
import { chartIcons, iconsRoute } from '@assets';

@Component({
  selector: 'app-status-item',
  imports: [],
  templateUrl: './status-item.component.html',
  styleUrl: './status-item.component.css'
})
export class StatusItemComponent {
  icons = chartIcons
  iconsPath = iconsRoute

  severity = input.required<'error' | 'warn' | 'success'>()
  message = input.required<string>()
}
