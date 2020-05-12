import { Component, OnDestroy, OnInit } from "@angular/core";
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { Subscription } from 'rxjs';

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {

  mediaSub:Subscription;
  deviceXs:boolean;
	title = "FlipCart";
	url = "";
	listItems: any;
	constructor(public MediaObserver:MediaObserver) {
		this.listItems = [
			{
				name: "Home",
				link: "#/home"
			},
			{
				name: "Products",
				link: "#/products"
      },
      {
				name: "Products2",
				link: "#/products2"
      },
			{
				name: "Cart",
				link: "#/cart"
			},
			{
				name: "About",
				link: "#/about"
      },
      {
				name: "Login",
				link: "#/register-user"
      },
		];
  }

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

	add(title, url) {
		if (title !== "" && url !== "") {
			url = "http://" + url;
			this.listItems.push({
				name: title,
				link: url,
				isNew: true
			});
			this.title = "";
			this.url = "";
		}
	}
}
