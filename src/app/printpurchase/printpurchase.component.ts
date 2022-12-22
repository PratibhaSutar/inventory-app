import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-printpurchase',
  templateUrl: './printpurchase.component.html',
  styleUrls: ['./printpurchase.component.css']
})
export class PrintpurchaseComponent implements OnInit {

  id = "";
  purchase:any;

  constructor(private api:ApiService, private route:ActivatedRoute) { 
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.api.get("purchases").subscribe((result:any)=>{
      console.log(result);
      for(let i = 0; i < result.length; i++){
        if(result[i].id === this.id){
            this.purchase = result[i];
            console.log(this.purchase);
            break;
        }
      }
    });
  }

}
