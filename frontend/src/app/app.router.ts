import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { ProductsComponent } from './products/products.component';
import { Products2Component } from './products2/products2.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterUserComponent } from './register-user/register-user.component';

export const router: Routes = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "about", component: AboutComponent },
  { path: "products", component: ProductsComponent },
  { path: "products2", component: Products2Component },
	{ path: "home", component: HomeComponent },
	{ path: "cart", component: CartComponent },
  { path: "sidebar-component", component: SidebarComponent },
  { path: "register-user", component: RegisterUserComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
