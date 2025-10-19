import { Component, input } from '@angular/core';
import { InfoItemComponent } from '../info-item/info-item.component';
import { AccordionModule } from 'primeng/accordion'
import { CardModule } from 'primeng/card'

@Component({
  selector: 'app-remidiation-item',
  imports: [InfoItemComponent, AccordionModule, CardModule ],
  templateUrl: './remidiation-item.component.html',
  styleUrl: './remidiation-item.component.css'
})
export class RemidiationItemComponent {
  icon = input.required<string>()
  infoTitle = input.required<string>()
  infoSubtitle = input<string>()

  primaryText = input.required<string>()
  title = input.required<string>()
  value = input.required<string>()


}
