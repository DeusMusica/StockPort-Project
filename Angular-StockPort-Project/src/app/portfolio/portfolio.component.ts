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
  public createPortfolio: boolean = false;
  public displayPortfolio: boolean = false;
  public portfolioHome: boolean = true;
  async newPortfolio (newPortfolio: PortfolioInfo) {
    
    this.portfolioInfo = await this.portfolioService.newPortfolio(newPortfolio);


  }
  showCreatePortfolio()
  {
    this.createPortfolio=true;
    this.displayPortfolio=false;
    this.portfolioHome=false;
  }
  showPortfolio()
  {
    this.createPortfolio=false;
    this.displayPortfolio=true;
    this.portfolioHome=false;
  }

  ngOnInit(): void {
  }
  

}
