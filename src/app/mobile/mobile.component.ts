import { Component } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  listProduct :Product[] = [
    {id:1,title:'PHONE 1',price:20,quantity:10,like:0,image:"../../assets/images/phone.jpg"},
    {id:2,title:'PHONE 2',price:5,quantity:0,like:52,image:"../../assets/images/phone.jpg"},
    {id:3,title:'PHONE 3',price:10,quantity:20,like:5,image:"../../assets/images/phone.jpg"}
  ];

  afterRecieveData(t:any){
    alert(t);
  }
}
