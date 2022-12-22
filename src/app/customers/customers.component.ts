import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

  customer: any;
  customers: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.customer = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", Validators.required)
    })
    this.api.get("customers").subscribe((result: any) => {
      this.customers = result;
    });
  }

  save(data: any) {
    if (data.id == "") {
      data.id = Date().toString();
      this.api.post("customers", data).subscribe((result: any) => {
        this.load();
      });
    } else {
      this.api.put("customers", data).subscribe((result: any) => {
        this.load();
      });
    }
  }

  edit(data: any) {
    this.customer = new FormGroup({
      id: new FormControl(data.id),
      name: new FormControl(data.name, Validators.required)
    });
  }

  delete(data:any) {
    if(confirm("Sure to delete?")){
      this.api.delete("customers", data).subscribe((result: any) => {
        this.load();
      });
    }
  }
}


