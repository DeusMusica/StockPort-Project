import { Component, OnInit } from '@angular/core';
import { StockDetailInfo } from '../models/StockDetails';
import { StockDetailsService } from '../services/stockdetails-service.service';


@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  public stockList: StockDetailInfo[] = [];

  constructor(protected stockDetailsService: StockDetailsService) { }

  async getStocks() {
    this.stockList = await this.stockDetailsService.getStocks();

  }

  ngOnInit(): void {
  }
}
