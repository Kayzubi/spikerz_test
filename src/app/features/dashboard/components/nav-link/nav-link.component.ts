import { Component, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { iconsRoute } from '@assets';
import { SIDEBAR_EXPANDED } from '../sidebar/sidebar-expanded.token';
import { hideAndRevealElement } from 'src/app/shared/shared-animations';

@Component({
  selector: 'app-nav-link',
  imports: [RouterModule],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.css',
  animations: [
    hideAndRevealElement('sidebarOpen', '150ms cubic-bezier(0.4, 0.0, 0.2, 1)'),
  ],
})
export class NavLinkComponent {
  sidebarIconsRoute = iconsRoute;

  title = input<string>();
  icon = input<string>();
  routePath = input<string>();

  isSidebarExpanded = inject(SIDEBAR_EXPANDED);
}
