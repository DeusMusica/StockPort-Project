import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthComponent } from '../Authentication/auth/auth.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { StockDetailsComponent } from '../stock-details/stock-details.component';
import { CustomerComponent } from '../customer/customer.component';



const appRoutes: Routes = [
  { path: 'Authenication', component: AuthComponent},
  { path: 'Portfolio', component: PortfolioComponent},
  { path: 'StockDetails', component: StockDetailsComponent},
  { path: 'Customer', component: CustomerComponent },
  //{ path: '', component: AppComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AppRoutingModule { }
