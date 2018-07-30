import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
trigger('fadeInAnimation', [
    state('inactive', style({
      backgroundColor: '#eee',
      opacity:0
    })),
    state('active', style({
      backgroundColor: '#cfd8dc',
      opacity:1
    })),
    transition('inactive => active', animate('600ms ease-in')),
    transition('active => inactive', animate('600ms ease-out'))
])