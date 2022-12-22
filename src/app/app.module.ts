import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SaleComponent } from './sale/sale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrintpurchaseComponent } from './printpurchase/printpurchase.component';
import { PrintsaleComponent } from './printsale/printsale.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuppliersComponent,
    CustomersComponent,
    ProductsComponent,
    PurchaseComponent,
    SaleComponent,
    PrintpurchaseComponent,
    PrintsaleComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
