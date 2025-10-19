import { trigger, state, style, transition, animate } from '@angular/animations'


export const hideAndRevealElement = (
  name: string, duration: string
) => {
  return trigger(name, [
  state('hidden', style({ opacity: 0, visibility: 'hidden' })),
  state('visible', style({ opacity: 1, visibility: 'visible' })),
  transition('hidden <=> visible', animate(duration))
])
}

export const revealChildOnParentHover = hideAndRevealElement('hoverReveal', '150ms ease-in-out')
