import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routeIcons, userControlIcons } from '@assets'
import { ButtonModule } from 'primeng/button'
import { HoverableDirective } from 'src/app/shared/hoverable.directive';
import { hideAndRevealElement, revealChildOnParentHover } from 'src/app/shared/shared-animations';
import { NavLinkComponent } from '../nav-link/nav-link.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SIDEBAR_EXPANDED } from './sidebar-expanded.token';


@Component({
  selector: 'app-sidebar',
  imports: [
    RouterModule,
    ButtonModule,
    HoverableDirective,
    NavLinkComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: [
    revealChildOnParentHover,
    hideAndRevealElement(
      'sidebarOpenState',
      '150ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    ),
    trigger('toggleSidebar', [
      state('collapsed', style({ width: '80px' })),
      state('expanded', style({ width: '250px' })),
      transition(
        'collapsed <=> expanded',
        animate('0.5s cubic-bezier(0.4, 0.0, 0.2, 1)'),
      ),
    ]),
  ],
  viewProviders: [
    {
      provide: SIDEBAR_EXPANDED,
      deps: [SidebarComponent],
      useFactory: (sb: SidebarComponent) => sb.isSidebarExpanded.asReadonly()
    }
  ]

})
export class SidebarComponent {
  userIcons = userControlIcons;
  isSidebarExpanded = signal<boolean>(false);

  sidebarState = computed(() =>
    this.isSidebarExpanded() ? 'expanded' : 'collapsed',
  );

  navRoutes = [
    {
      icon: routeIcons.dashboard,
      title: 'Lorem',
    },
    {
      icon: routeIcons.alert,
      title: 'Lorem',
    },
    {
      icon: routeIcons.container,
      title: 'Lorem',
    },
    {
      icon: routeIcons.arrow,
      title: 'Lorem',
    },
    {
      icon: routeIcons.connection,
      title: 'Lorem',
    },
    {
      icon: routeIcons.report,
      title: 'Lorem',
    },
    {
      icon: routeIcons.levels,
      title: 'Lorem',
    },
  ];

  toggleSidebarState() {
    this.isSidebarExpanded.update((prev) => !prev);
  }
}
