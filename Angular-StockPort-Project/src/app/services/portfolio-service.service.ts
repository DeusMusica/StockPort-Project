import { Injectable } from '@angular/core';
import { PortfolioInfo } from '../models/Portfolio';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication-service.service';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public basePath: string = 'http://localhost:5160'

  public portfolioId : Number = this.authenticationService.userID;

  constructor(protected httpClient: HttpClient, protected authenticationService: AuthenticationService) {}
  
  async newPortfolio(newPortfolioInfo: PortfolioInfo) {
    const endpoint = 'http://localhost:5160/portfolio';
    //newPortfolioInfo.fK_CustomerID = this.portfolioId;
    return await this.httpClient
    
      .post(endpoint, newPortfolioInfo)
      .toPromise()
      .then(newPortfolio => newPortfolio ?? <PortfolioInfo>{});
  }
}
