import { Component } from '@angular/core';
import { Product } from '../core/model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title:string = "welcome 4SAE5"
  color="";
  price:number=5;
  listproducts:Product[]=[]

  constructor(private Ps:ProductService){}

  ngOnInit(){
    this.listproducts=this.Ps.listproducts;
  }

incrementLike(i:number){
  this.listproducts[i].like++;

}

}
