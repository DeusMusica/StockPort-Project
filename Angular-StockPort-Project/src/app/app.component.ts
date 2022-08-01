import { Component } from '@angular/core';
import { Customer } from './models/Customer';
import { CustomerService } from './services/customer-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StockPort-Project';

  public hasCustomer: boolean = false;
  public customerList: Customer[] = []; 

  constructor(protected customerService: CustomerService) {}

  async getCustomer () {
    this.customerList = await this.customerService.getCustomer();
    this.hasCustomer = true;
  }
}
