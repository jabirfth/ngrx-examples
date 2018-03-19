import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './component/product-form.component';
import { ProductTableComponent } from './component/product-table.component';
import { IndexProductComponent } from './index-product/index-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './service/product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductRoutingModule,
  ],
  declarations: [
    IndexProductComponent,
    ProductTableComponent,
    ProductFormComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
