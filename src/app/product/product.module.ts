import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './component/product-form.component';
import { ProductTableComponent } from './component/product-table.component';
import { IndexProductComponent } from './index-product/index-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './service/product.service';
import { StoreModule } from '@ngrx/store';

import * as fromProducts from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/products.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductRoutingModule,
    StoreModule.forFeature('products', fromProducts.reducers),
    EffectsModule.forFeature([ProductsEffects])
  ],
  declarations: [
    IndexProductComponent,
    ProductTableComponent,
    ProductFormComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
