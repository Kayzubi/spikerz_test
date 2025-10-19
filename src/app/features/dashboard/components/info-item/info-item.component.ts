import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-info-item',
  imports: [],
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.css'
})
export class InfoItemComponent {
  title = input.required<string>()
  subTitle = input<string>()
  orientation = input<'horizontal' | 'vertical'>('horizontal')
  icon = input.required<string>()
  size = input<'small' | 'default'>()
}
