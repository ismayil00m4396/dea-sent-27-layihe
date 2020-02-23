import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { RedakteService } from 'src/app/service/redakte.service';
import { MatDialog } from '@angular/material';
import { AddProductComponent } from '../add-product/add-product.component';
import { splitClasses } from '@angular/compiler';
import { RedakteComponent } from 'src/app/redakte/redakte.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
username:string='';
products:Product[]=[];
  
  constructor(private mat:MatDialog, private productService:ProductService, private ls:LoginService,private router:Router) { }

  ngOnInit() {
    this.username=this.ls.username;
    this.products=this.productService.products.slice();
  }
  onCreateProduct(){
    this.productService.selectedProduct=null;
let dialoqum=this.mat.open(AddProductComponent);
 this.productService.hadisemiz.subscribe(
   resp=>{
     this.products.push(resp);
   }
 );
  }
  onDelete(p:Product,counter:number,status:boolean){
 if(status==true){
  this.products.splice(counter,1);
 }
  }
  onUpdate(p:Product,counter:number){
    let dialoqum=this.mat.open(AddProductComponent);
    this.productService.hadisemiz.subscribe(
      resp=>{
        this.products.push(resp);
      }
    );
  
  }


  popoverMessage='Silsəniz həmişəlik silinəcək!!!';
  popoverTitle='Silmək istəyirsiniz???';
}