import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/mergeMap';

import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.css']
})
export class IndexProductComponent implements OnInit {
  products: Product[];

  product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.listProducts()
      .subscribe(
        products => this.products = products
      );
  }

  onEdit(pId: number) {
    this.productService.getProduct(pId)
      .subscribe(
        p => this.product = p
      );
  }

  onDelete(pId: number) {
    this.productService.deleteProduct(pId)
      .mergeMap(() => this.productService.listProducts())
      .subscribe(
        products => this.products = products
      );
  }

  onSubmit(p: Product) {
    if (!!p.id) {
      // update
      this.productService.updateProduct(p)
        .mergeMap(() => this.productService.listProducts())
        .subscribe(
          products => this.products = products
        );
    } else {
      // create
      this.productService.createProduct(p)
        .mergeMap(() => this.productService.listProducts())
        .subscribe(
          products => this.products = products
        );
    }
  }

}
