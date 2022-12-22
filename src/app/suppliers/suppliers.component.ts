import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})

export class SuppliersComponent implements OnInit {

  supplier: any;
  suppliers: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.supplier = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", Validators.required)
    })
    this.api.get("suppliers").subscribe((result: any) => {
      this.suppliers = result;
    });
  }

  save(data: any) {
    if (data.id == "") {
      data.id = Date().toString();
      this.api.post("suppliers", data).subscribe((result: any) => {
        this.load();
      });
    } else {
      this.api.put("suppliers", data).subscribe((result: any) => {
        this.load();
      });
    }
  }

  edit(data: any) {
    this.supplier = new FormGroup({
      id: new FormControl(data.id),
      name: new FormControl(data.name, Validators.required)
    });
  }

  delete(data:any) {
    if(confirm("Sure to delete?")){
      this.api.delete("suppliers", data).subscribe((result: any) => {
        this.load();
      });
    }
  }
}


