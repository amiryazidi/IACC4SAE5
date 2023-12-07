import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  registerForm!: FormGroup;
  constructor(){

  }
  ngOnInit(){

    this.registerForm= new FormGroup({
      id:new FormControl(),
      title: new FormControl('tt',[Validators.required,Validators.minLength(3)]),
      price: new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')]),
      like:new FormControl('',Validators.required),
      quantity:new FormControl('',Validators.required),

    });
  }
  onSubmit(){
    console.log(this.registerForm.value);
    alert('SUCCES\n\n'+ JSON.stringify(this.registerForm.value,null,4))
  }
  reset(){
    this.registerForm.reset();
  }


}
