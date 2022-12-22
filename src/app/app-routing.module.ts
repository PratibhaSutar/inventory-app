import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { PrintpurchaseComponent } from './printpurchase/printpurchase.component';
import { PrintsaleComponent } from './printsale/printsale.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SaleComponent } from './sale/sale.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"suppliers", component:SuppliersComponent},
  {path:"customers", component:CustomersComponent},
  {path:"products", component:ProductsComponent},
  {path:"purchase", component:PurchaseComponent},
  {path:"printpurchase/:id", component:PrintpurchaseComponent},
  {path:"sale", component:SaleComponent},
  {path:"printsale/:id", component:PrintsaleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
