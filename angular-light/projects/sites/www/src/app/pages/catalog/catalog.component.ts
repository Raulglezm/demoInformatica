import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppCatalogComponent implements OnInit{
  
  products: any;

  constructor(private productService: ProductsService) {  }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

}
