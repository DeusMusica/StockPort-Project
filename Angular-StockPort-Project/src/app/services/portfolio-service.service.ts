import { Injectable } from '@angular/core';
import { PortfolioInfo } from '../models/Portfolio';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication-service.service';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public basePath: string = 'http://localhost:5160/portfolio'

  constructor(protected httpClient: HttpClient) { }

  async newPortfolio(newPortfolioInfo: PortfolioInfo) {
    return await this.httpClient
      .post(this.basePath, newPortfolioInfo)
      .toPromise()
      .then(newPortfolio => newPortfolio ?? <PortfolioInfo>{});
  }

  async getPortfolios(userID: Number): Promise<PortfolioInfo[]> {
    return await this.httpClient
      .get<PortfolioInfo[]>(`${this.basePath}/${userID}`)
      .toPromise()
      .then(stock => stock ?? [<PortfolioInfo>{}]);
  }
}
