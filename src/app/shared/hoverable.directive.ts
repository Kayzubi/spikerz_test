import { Directive, HostListener, computed, signal } from '@angular/core'

@Directive({
  selector: '[appHoverable]',
  exportAs: 'hoverable',
  standalone: true,
})
export class HoverableDirective {
  isHovered = signal<boolean>(false);

  hoverState = computed(() => (this.isHovered() ? 'visible' : 'hidden'));

  @HostListener('mouseenter') onEnter() {
    this.isHovered.set(true);
  }
  @HostListener('mouseleave') onLeave() {
    this.isHovered.set(false);
  }

  @HostListener('focusin') onFocusIn() {
    this.isHovered.set(true);
  }
  @HostListener('focusout') onFocusOut() {
    this.isHovered.set(false);
  }
}
