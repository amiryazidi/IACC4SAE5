import { Component, ViewChild } from '@angular/core';
import { Product } from '../core/model/product';
import { ShowOneProductComponent } from '../show-one-product/show-one-product.component';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
listProduct :Product[] = [
  {id:1,title:'TV 1',price:20,quantity:10,like:0,image:"../../assets/images/tv.jpg"},
  {id:2,title:'TV 2',price:5,quantity:0,like:52,image:"../../assets/images/tv.jpg"},
  {id:3,title:'TV 3',price:10,quantity:20,like:5,image:"../../assets/images/tv.jpg"}
];
afterRecieveData(t:Product){
 // alert(t);
 let index=this.listProduct.indexOf(t);
  this.listProduct[index].like++
}
//@ViewChild(ShowOneProductComponent) child:any;


}
