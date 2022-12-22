import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  suppliers: any;
  products:any;
  details = new Array();
  total = 0;
  supplierid = "";
  date = "";

  constructor(private api: ApiService, private router:Router) {
   this.date = new Date().toString();
   }

  ngOnInit(): void {
    this.api.get("suppliers").subscribe((result: any) => {
      this.suppliers = result;
    });

    this.api.get("products").subscribe((result: any) => {
      this.products = result;
    });

    this.addrow();
  }

  addrow(){
    this.details.push({ productid: "", quantity: 0, purchaserate: 0, total : 0 });
  }

  valueChanged(index:number, key:string, event:any){
    this.details[index][key] = event.target.value;
    this.details[index]["total"] = this.details[index]["quantity"] * this.details[index]["purchaserate"];
    this.total = 0;
    this.details.forEach(detail => {
      this.total += detail.total;
    });
  }

  submit() {
    if(this.date == ""){
      alert("Select date");
      return;
    }
    if(this.supplierid == ""){
      alert("Select supplier");
      return;
    }
    if(this.total == 0){
      alert("Enter atleast one product");
      return;
    }
    let purchase = {
      id: Math.round(Math.random() * 100000),
      date:this.date,
      supplierid : this.supplierid,
      total:this.total,
      products:this.details
    };
    this.api.post("purchases", purchase).subscribe((result:any)=>{
      // alert("Purchase Success");
      this.router.navigate(["/printpurchase/" + purchase.id]);
    });

  }
}
