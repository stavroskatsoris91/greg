import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { style, animate, AnimationMetadata, AnimationBuilder, AnimationPlayer, keyframes, sequence } from '@angular/animations';

// export const XpAnimations: any = {}
// animations:[
//   trigger('myfirstanimation',[
//     state('small',style({height:'0px'})),
//     state('large',style({height:'auto'})),

//     transition('small <=> large',animate('400ms ease-in'))
//   ])
// ]
// XpAnimations['small'] = animate('400ms ease-in', keyframes([
//   style({height:'0px'})
// ]));

// XpAnimations['large'] = animate('400ms ease-in', keyframes([
//   style({height:'100px'})
// ]));
@Directive({
  selector: '[appToggleAnimate]'
})
export class ToggleAnimateDirective {
  player: AnimationPlayer;
  on: boolean;

  @Input()
  set show(show: boolean) {
    if (this.player) {
      this.player.destroy();
    }

    const metadata = show ? this.toggleOn() : this.toggleOff();
    this.on = show;
    const factory = this.builder.build(metadata);
    const player = factory.create(this.el.nativeElement);

    player.play();
  }

  constructor(private builder: AnimationBuilder, private el: ElementRef) {}

  private toggleOn(): AnimationMetadata[] {
    return [
      sequence([
        animate('300ms ease-in', style({height:this.height+'px'})),
        style({height:'auto'}),
      ])
    ];
  }
  get height(){
    return [...this.el.nativeElement.children].map(x=>x.clientHeight||0).reduce((sum, current) => sum + current, 0);
  }
  private toggleOff(): AnimationMetadata[] {
    return [
      style({height:this.height+'px'}),
      animate('300ms ease-in', style({height:'0px'})),
    ];
  }

}
