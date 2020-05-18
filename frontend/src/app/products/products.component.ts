import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import book_products from '../scraped-json-products/result-books.json'
// import comp_products from '../scraped-json-products/result-comp-acs.json'
// import grocery_products from '../scraped-json-products/result-grofers.json'
// import shoes_products from '../scraped-json-products/result-shoes.json'
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products: any;
  cartProducts: any = [];
  title:String = "Products";
  category: any = 0;
  books : any = [];
  pshoes : any = [];
  pcomp : any = [];
  pgrocery : any = [];
  phot : any = [];

  constructor(private router: Router, private _myservice:MyserviceService) {

    this._myservice.getProducts('books')
    .subscribe(
      data => { this.books = data; },
      error => { console.log("Error retrieving items p_books"); }
    );

    this._myservice.getProducts('shoes')
    .subscribe(
      data => { this.pshoes = data; },
      error => { console.log("Error retrieving items p_shoes"); }
    );

    this._myservice.getProducts('electronics')
    .subscribe(
      data => { this.pcomp = data; },
      error => { console.log("Error retrieving items p_comp"); }
    );

    this._myservice.getProducts('groceries')
    .subscribe(
      data => { this.pgrocery = data; },
      error => { console.log("Error retrieving items p_grocery"); }
    );

    this._myservice.getProducts('hot')
    .subscribe(
      data => { this.phot = data; },
      error => { console.log("Error retrieving items p_hot"); }
    );

  }

  catFunc( i ) {
    this.category = i;
  }

  ngOnInit() {

  }

  addToCart(index){
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    if(data !== null){
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }
  updateCartData(cartData) {
    this.cartProducts = cartData;
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
