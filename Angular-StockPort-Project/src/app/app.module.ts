import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './Authentication/auth/auth.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [AuthComponent, PortfolioComponent, StockDetailsComponent, CustomerComponent, AppComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule,
    RouterModule.forRoot([
      { path: 'Authenication', component: AuthComponent },
      { path: 'Portfolio', component: PortfolioComponent },
      { path: 'StockDetails', component: StockDetailsComponent },
      { path: 'Customer', component: CustomerComponent }
    ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

