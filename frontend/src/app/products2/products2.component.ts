import { Component, OnDestroy, OnInit } from "@angular/core";
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products2',
  templateUrl: './products2.component.html',
  styleUrls: ['./products2.component.css']
})
export class Products2Component implements OnInit, OnDestroy  {

  mediaSub:Subscription;
  deviceXs:boolean;

  constructor(public MediaObserver:MediaObserver) { }

  ngOnInit() {
    this.mediaSub = this.MediaObserver.media$.subscribe(
      (result:MediaChange)=>{
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === 'xs' ? true:false;
      }
    )
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }



}
