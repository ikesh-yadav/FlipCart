import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import book_products from '../scraped-json-products/result-books.json'
import comp_products from '../scraped-json-products/result-comp-acs.json'
import grocery_products from '../scraped-json-products/result-grofers.json'
import shoes_products from '../scraped-json-products/result-shoes.json'
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

  constructor(private router: Router, private _myservice:MyserviceService) {

    this._myservice.getProducts('books')
    .subscribe(
      data => { this.books = data; },
      error => { console.log("Error retrieving books"); }
    );

  }

  catFunc( i ) {
    this.category = i;
  }

  public compData : {
    name: string;
    price: string;
    image: string;
    rating: string;
  }[] = comp_products;

  public bookData : (
      { name: string;
      price: string;
      image: string;
      rating: string;
      author: string; } |
      { name: string;
        image: string;
        rating: string;
        author: string;
        price?: undefined; }
  )[] = book_products;

  public groceryData: {
    name: string;
    price: string;
    qty: string;
    image: string;
  }[] = grocery_products;

  public shoesData: (
    { name: string; brand: string; price: string; image: string; rating: string; } |
    { name: string; brand: string; price: string; image: string; rating?: undefined; } |
    { name: string; brand: string; image: string; rating: string; price?: undefined; }
    )[] = shoes_products;


  ngOnInit() {

    // console.log(book_products);
    // console.log(comp_products);
    // console.log(grocery_products);
    // console.log(shoes_products);

    //let data = localStorage.getItem('cart');

    // if(data !== null){
    //   this.cartProducts = JSON.parse(data);
    // } else {
    //   this.cartProducts = [];
    // }

    this.products = [
      {
        id:10,
        title: "Airpods",
        description: "Apple Airpods premium music experience",
        img:"assets/airpods.png",
        price:399
      },
      {
        id:10,
        title: "Boats Earphones",
        description: "Great music experience",
        img:"assets/beats-earphones.png",
        price:99
      },
      {
        id:11,
        title: "SS Bat",
        description: "Cricket bat",
        img:"assets/cricket-bat.png",
        price:199
      },
      {
        id:12,
        title: "Nivia Football",
        description: "Become Messi",
        img:"assets/football.png",
        price:50
      },
      {
        id:13,
        title: "Headphones",
        description: "BoomBoom Ciao",
        img:"assets/headphones.png",
        price:38
      },
      {
        id:14,
        title: "Macbook Pro",
        description: "Apple's premium Laptop",
        img:"assets/macbook.png",
        price:499
      },
      {
        id:15,
        title: "Mask",
        description: "Protects you from Covid",
        img:"assets/mask.png",
        price:38
      },
      {
        id:16,
        title: "Oneplus 6",
        description: "Premium Smartphone",
        img:"assets/oneplus-6.png",
        price:287
      },
      {
        id:17,
        title: "Playstation",
        description: "PS4 Gaming",
        img:"assets/playstation.png",
        price:389
      },
      {
        id: 1,
        title: "Americano",
        description: "Americano",
        img: "assets/noun_942609_cc.png",
        price: 2
      },
      {
        id:2,
        title: "Espresso Machine",
        description: "Italian Espresso Machine",
        img:"assets/noun_943220_cc.png",
        price:800
      },
      {
        id:3,
        title: "Coffee",
        description: "Cup of coffee",
        img:"assets/noun_11819_cc.png",
        price:3
      },
      {
        id:4,
        title: "Latte",
        description: "12oz Latte",
        img:"assets/noun_980115_cc.png",
        price:3
      },
      {
        id:5,
        title: "Cappuccino",
        description: "12oz Cappuccino",
        img:"assets/noun_924233_cc.png",
        price:4
      },
      {
        id:6,
        title: "Milk",
        description: "Pint of milk",
        img:"assets/noun_731877_cc.png",
        price:3
      },
      {
        id:7,
        title: "1lb Coffee",
        description: "1lb Coffee",
        img:"assets/noun_952355_cc.png",
        price:4
      },
      {
        id:8,
        title: "Cocoa",
        description: "Hot Cocoa",
        img:"assets/noun_731881_cc.png",
        price:2
      },
      {
        id:9,
        title: "Macchiato",
        description: "12oz macchiato",
        img:"assets/noun_1014669_cc.png",
        price:3
      },


    ]
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
