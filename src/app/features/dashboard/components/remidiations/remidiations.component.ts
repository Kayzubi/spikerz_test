import { Component } from '@angular/core';
import { RemidiationItemComponent } from '../remidiation-item/remidiation-item.component';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-remidiations',
  imports: [RemidiationItemComponent, AccordionModule],
  templateUrl: './remidiations.component.html',
  styleUrl: './remidiations.component.css'
})
export class RemidiationsComponent {

}
