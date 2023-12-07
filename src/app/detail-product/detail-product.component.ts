import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
id!:number;
listProduct:Product[]=[];
  constructor(private route:ActivatedRoute,private Ps:ProductService){}

  ngOnInit(){
    this.listProduct=this.Ps.listproducts;
   // this.listProduct=this.listProduct.filter((p)=>p.id==this.id);
    this.id=this.route.snapshot.params['id'];
  }

}
