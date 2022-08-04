import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockDetailInfo } from '../models/StockDetails';

@Injectable({
  providedIn: 'root'
})
export class StockDetailsService {
  public basePath: string = 'http://localhost:5160'

  constructor(protected httpClient: HttpClient) { }

  async getStocks(): Promise<StockDetailInfo[]> {
    return await this.httpClient
      .get<StockDetailInfo[]>(`${this.basePath}/stocks`)
      .toPromise()
      .then(stock => stock ?? [<StockDetailInfo>{}]);
  }
}
