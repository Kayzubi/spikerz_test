import { InjectionToken, Signal } from '@angular/core';

export const SIDEBAR_EXPANDED = new InjectionToken<Signal<boolean>>(
  'SIDEBAR_EXPANDED',
);
