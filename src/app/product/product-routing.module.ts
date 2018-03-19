import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexProductComponent } from './index-product/index-product.component';

const routes: Routes = [
  { path: '', component: IndexProductComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
