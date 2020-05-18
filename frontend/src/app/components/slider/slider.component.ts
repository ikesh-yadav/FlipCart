import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent implements OnInit, OnDestroy {

  deviceXs:boolean;
  mediaSub:Subscription;

  constructor(config: NgbCarouselConfig, private router: Router, public MediaObserver:MediaObserver) {
    config.interval = 3500;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
   }

  ngOnInit(): void {
    this.mediaSub = this.MediaObserver.media$.subscribe(
      (result:MediaChange)=>{
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === 'xs' ? true:false;
      }
    )
    console.log(this.deviceXs);
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  viewProducts() {
    this.router.navigate(['/products']);
  }

}
