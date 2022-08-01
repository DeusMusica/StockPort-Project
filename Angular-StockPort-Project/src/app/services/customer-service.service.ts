import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public basePath: string = 'http://localhost:5160'
  constructor(protected httpClient: HttpClient) {}

  async getCustomer(): Promise<Customer[]> {   
      return await this.httpClient
          .get<Customer[]>(`${this.basePath}/customers/search`)
          .toPromise()
          .then(customer => customer ?? [<Customer>{}]);
  }

  async newCustomer(newCustomer: Customer) {
    const endpoint = 'http://localhost:5160/customers';

    return await this.httpClient
      .post(endpoint, newCustomer)
      .toPromise()
      .then(customer => customer ?? <Customer>{});
  }
}
