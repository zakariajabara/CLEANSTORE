import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";


//Use the Customer created Derective
// import the derective and add it in the declarations
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";

import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";
    
@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    exports: [StoreComponent, CartSummaryComponent, CheckoutComponent]
})
export class StoreModule { }
