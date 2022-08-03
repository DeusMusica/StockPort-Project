import { Component, Input, OnInit } from '@angular/core';
import { PortfolioInfo } from '../models/Portfolio';
import { PortfolioService } from '../services/portfolio-service.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public portfolioInfo : PortfolioInfo = {};
  constructor(protected portfolioService: PortfolioService) { }

  async newPortfolio (newPortfolio: PortfolioInfo) {
    this.portfolioInfo = await this.portfolioService.newPortfolio(newPortfolio);


  }
  ngOnInit(): void {
  }

}
