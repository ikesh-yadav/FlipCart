// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'user-login-page';
// }

import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	title = "user-login-page";
	url = "";
	listItems: any;
	constructor() {
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
