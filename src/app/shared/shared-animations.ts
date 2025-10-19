import { trigger, state, style, transition, animate } from '@angular/animations'


export const hideAndRevealElement = (
  name: string, duration: string
) => {
  return trigger(name, [
  state('hidden', style({ opacity: 0, visibility: 'hidden', display: 'none' })),
  state('visible', style({ opacity: 1, visibility: 'visible', display: 'block' })),
  transition('hidden <=> visible', animate(duration))
])
}

export const revealChildOnParentHover = hideAndRevealElement('hoverReveal', '150ms ease-in-out')
