import { MyserviceService } from './myservice.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {


  username : string = '';
  userdata : any ;
  mediaSub:Subscription;
  deviceXs:boolean;
	title = "FlipCart";
	url = "";
  listItems: any;


  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
    this.username = '';
  }

  constructor(public MediaObserver:MediaObserver
    , private myService: MyserviceService
    , private _router: Router
    ) {

      if(localStorage.getItem('token') != null ) {
        this.myService.getUserName()
        .subscribe(
          data =>{
            this.username = data['first'].toString();
            this.userdata = data;
            console.log(this.username);
            console.log(this.userdata);

         },

          error => { console.log("Error getting the username !"); }
        );
      }

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
				name: "About",
				link: "#/about"
      },
      {
				name: "Login",
				link: "#/register-user"
      },
      {
				name: "Cart",
				link: "#/cart"
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
