import { trigger, AnimationTriggerMetadata, state, style, transition, animate } from '@angular/animations';
import { AlertService } from './services/alert.service';
let alertService = AlertService

export let alertAnimation:AnimationTriggerMetadata ;

if(alertService.danger == 'danger'){
  alertAnimation  = trigger('torrada',[
    state('show', style({
      backgroundColor:'red',
      bottom:'40px'
    })),
    state('hide', style({
      bottom:'-100%'
    })),
    transition('hide => show', animate('1s ease')),
    transition('show => hide', animate('1s ease'))
  ]);
}



