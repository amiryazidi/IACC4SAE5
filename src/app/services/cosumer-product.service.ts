import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/model/product';

@Injectable({
  providedIn: 'root'
})
export class CosumerProductService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return  this.http.get<Product[]>('http://localhost:3000/products')
  }
}
