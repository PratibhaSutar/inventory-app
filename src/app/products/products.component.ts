import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  product: any;
  products: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.product = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", Validators.required),
      gstpercent: new FormControl(0, Validators.required),
      saleprice: new FormControl(0, Validators.required),
    })
    this.api.get("products").subscribe((result: any) => {
      this.products = result;
    });
  }

  save(data: any) {
    if (data.id == "") {
      data.id = Date().toString();
      this.api.post("products", data).subscribe((result: any) => {
        this.load();
      });
    } else {
      this.api.put("products", data).subscribe((result: any) => {
        this.load();
      });
    }
  }

  edit(data: any) {
    this.product = new FormGroup({
      id: new FormControl(data.id),
      name: new FormControl(data.name, Validators.required),
      gstpercent: new FormControl(data.gstpercent, Validators.required),
      saleprice: new FormControl(data.saleprice, Validators.required),
    });
  }

  delete(data:any) {
    if(confirm("Sure to delete?")){
      this.api.delete("products", data).subscribe((result: any) => {
        this.load();
      });
    }
  }
}


