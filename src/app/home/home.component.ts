import { Component } from '@angular/core';
import { Product } from '../core/model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { CosumerProductService } from '../services/cosumer-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title:string = "welcome 4SAE5"
  color="";
  price!:number;
  listproducts:Product[]=[]
  AlertStock!:number;

  constructor(private Ps:ProductService,private cl:CalculService,private cons:CosumerProductService){}

  ngOnInit(){
   // this.listproducts=this.Ps.listproducts;
    this.cons.getProducts().subscribe(
      (data)=>this.listproducts=data
    )
  }

incrementLike(i:number){
  this.listproducts[i].like++;

}
getAlertStock(){
this.AlertStock=this.cl.getCalc(this.listproducts,'quantity',0);
}

}
