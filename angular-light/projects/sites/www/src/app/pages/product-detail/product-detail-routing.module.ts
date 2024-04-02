import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { AppIndexComponent } from '../../index/index.component';


const routes: Routes = [
  {
    path: '',
    component: ProductDetailComponent
  },
  {
    path: '**',
    component: AppIndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailRoutingModule { }
