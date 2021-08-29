import { Component, OnInit } from '@angular/core';
import { createAnimation } from '@ionic/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  slider;
  slideCount = 6;
  animations = [];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    longSwipes: false,
    parallax: true
  };
  constructor( ) { }

  ngOnInit() {
  }
  initAnimations() {
    for (let i = 0; i < this.slideCount; i++) {
      const id = `#slide-${i}`;
      const animation = createAnimation()
        .addElement(document.querySelector(id))
        .duration(800)
        .iterations(1)
        .easing('ease-out')
        .fromTo('transform', 'translateY(0%)', 'translateY(-100%)')
        .fromTo('opacity', '0', '1');
      this.animations.push(animation);
    }
  }

  slideChanged() {
    this.slider.getActiveIndex().then(res => {
      this.animations[res].play();
    });
  }

slideWillChange() {
  this.slider.getPreviousIndex().then(res => {
    this.animations[res].stop();
  });

}
}

