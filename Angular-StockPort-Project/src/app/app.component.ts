import { Component } from '@angular/core';
import { AuthenticationInfo } from './models/AuthenticationModel';
import { Customer } from './models/Customer';
import { AuthenticationService } from './services/authentication-service.service';
import { CustomerService } from './services/customer-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StockPort-Project';

  public hasCustomer: boolean = false;
  public showLogin: boolean = true;
  public showNewCustomer: boolean = false;
  public customerList: Customer[] = []; 
  public customer: Customer = {};
  

  constructor(protected customerService: CustomerService) {}
  

  async getCustomer () {
    this.customerList = await this.customerService.getCustomer();
    this.hasCustomer = true;
  }

  async newCustomer (newCustomer: Customer) {
    this.customer = await this.customerService.newCustomer(newCustomer);


  }

  

  async hiddenSwitch () {
    this.showLogin = false;
    this.showNewCustomer = true;
  }
  async hiddenSwitchReverse () {
    this.showLogin = true;
    this.showNewCustomer = false;
  }
  

  // todo- create autho function
  //
}
