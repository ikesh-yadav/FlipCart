import { MyserviceService } from '../../services/myservice.service';
import { Component, OnDestroy, OnInit, Input } from "@angular/core";
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { Subscription } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	username : string = '';

  constructor(public MediaObserver:MediaObserver
    , private myService: MyserviceService
    , private _router: Router) {
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

  ngOnInit(): void {

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

  @Input() deviceXs: boolean;
  url = "";
  listItems: any;

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userdata');
    localStorage.removeItem('cart');
    this._router.navigate(['/home']);
    this.username = '';
  }


}
