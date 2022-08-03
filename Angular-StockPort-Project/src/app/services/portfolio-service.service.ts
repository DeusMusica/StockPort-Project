import { Injectable } from '@angular/core';
import { PortfolioInfo } from '../models/Portfolio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public basePath: string = 'http://localhost:5160'
  constructor(protected httpClient: HttpClient) {}
  
  async newPortfolio(newPortfolio: PortfolioInfo) {
    const endpoint = 'http://localhost:5160/portfolio';

    return await this.httpClient
      .post(endpoint, newPortfolio)
      .toPromise()
      .then(newPortfolio => newPortfolio ?? <PortfolioInfo>{});
  }
}
