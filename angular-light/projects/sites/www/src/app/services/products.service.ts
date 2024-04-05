import { Injectable } from '@angular/core';
import { products } from '../../assets/db/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return products
  }

  getProduct(productId: number) {
    return products.find((product)=> productId === product.id)
  }

  getProductCategories(productId: number): Array<string> | void {
    for (let product of products) {
      if (product.id === productId) {
        return product.categorias
      }
    }
  }

  getProductTags(productId: number): Array<string> | void{
    for (let product of products) {
      if (product.id === productId) {
        return product.etiquetas
      }
    }
  }

  getProductPrice(productId: number): Number {
    let product = products.find((product)=> productId === product.id)
    return product.precioRebajado ? product.precioRebajado: product.precio
  }

}
