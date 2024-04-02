import { Component, OnInit } from '@angular/core';
import { products } from 'sites/www/src/assets/db/products';
import { Product } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  
  constructor(private router:ActivatedRoute) {}
  
  product: Product | undefined

  ngOnInit() {
    console.log("antes del numero")
    let productId = Number(this.router.snapshot.paramMap.get("productId"))
    console.log(productId)
    this.product = products.find((product)=> productId === product.id)
    console.log(this.product)
  }
}
