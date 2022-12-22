import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  customers: any;
  products:any;
  details = new Array();
  total = 0;
  saleas = "With GST";
  customerid = "";
  date = "";

  constructor(private api: ApiService) {
   this.date = new Date().toString();
   }

  ngOnInit(): void {
    this.api.get("customers").subscribe((result: any) => {
      this.customers = result;
    });

    this.api.get("products").subscribe((result: any) => {
      this.products = result;
    });

    this.addrow();
  }

  addrow(){
    this.details.push({ productid: "", quantity: 0, salerate: 0, total : 0 });
  }

  valueChanged(index:number, key:string, event:any){
    this.details[index][key] = event.target.value;
    let salerate = 0, gstpercent = 0;
    if(key == "productid"){
      for(let i = 0; i < this.products.length; i++){
        if(this.products[i].id === event.target.value)
          salerate = parseFloat(this.products[i].saleprice);
          gstpercent = parseFloat(this.products[i].gstpercent);
      }
      let gstamount = (salerate * gstpercent) / (100 + gstpercent);
      let saleratewithoutgst = salerate - gstamount;
      if(this.saleas == "With GST")
        this.details[index]["salerate"] = salerate;
      else
      this.details[index]["salerate"] = saleratewithoutgst;
    }
    this.details[index]["total"] = this.details[index]["quantity"] * this.details[index]["salerate"];
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
    if(this.customerid == ""){
      alert("Select customer");
      return;
    }
    if(this.total == 0){
      alert("Enter atleast one product");
      return;
    }
    let sale = {
      id: Math.round(Math.random() * 100000),
      date:this.date,
      customerid : this.customerid,
      saleas:this.saleas,
      total:this.total,
      products:this.details
    };
    this.api.post("sales", sale).subscribe((result:any)=>{
      alert("Sale Success");
    });

  }
}
