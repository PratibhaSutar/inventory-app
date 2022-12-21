import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {


formdata:any;
  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      name:new FormControl("")
    })
  }


  save(data:any){
    localStorage.setItem("name","Pratibha");
    alert("Suc");
  }
}
