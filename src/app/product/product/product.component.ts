import { Product } from './../model/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  names: string[];
  products: Product[];
  // name: string;

  constructor() {
    // this.name = 'Felip';
    this.names = ['Art', 'Game111', 'Flip', 'Dance'];
    const productList = [
      new Product(
        'test1',
        100,
        12
      ),
      new Product(
        'test3',
        200,
        22
      ),
      new Product(
        'test4',
        300,
        332
      )
    ]
    this.products = productList;
  }


  ngOnInit(): void {
    // let [{ name, price, sku }] = this.products;
    // console.log(name, price, sku);
    this.products.forEach(aa => {
      console.log(aa.name, aa.price, aa.sku);

    })

  }

}
