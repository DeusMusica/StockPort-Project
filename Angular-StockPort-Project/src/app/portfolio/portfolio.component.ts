import { Component, Input, OnInit } from '@angular/core';
import { PortfolioInfo } from '../models/Portfolio';
import { PortfolioService } from '../services/portfolio-service.service'
import { AuthenticationService } from '../services/authentication-service.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public portfolioInfo: PortfolioInfo = {};

  constructor(protected portfolioService: PortfolioService, protected authenticationService: AuthenticationService) { }
  public createPortfolio: boolean = false;
  public displayPortfolio: boolean = false;
  public portfolioHome: boolean = true;
  public portfolioList: PortfolioInfo[] = [];

  async newPortfolio(newPortfolio: PortfolioInfo) {
    const userID = this.authenticationService.userID;
    if (userID) {
      newPortfolio.fK_CustomerID = userID;
      this.portfolioInfo = await this.portfolioService.newPortfolio(newPortfolio);
    }
  }

  async getPortfolios() {
    const userID = this.authenticationService.userID;
    if (userID) {
      this.portfolioList = await this.portfolioService.getPortfolios(userID);
      this.showPortfolio();
    }
  }

  showCreatePortfolio() {
    this.createPortfolio = true;
    this.displayPortfolio = false;
    this.portfolioHome = false;
  }

  showPortfolio() {
    this.createPortfolio = false;
    this.displayPortfolio = true;
    this.portfolioHome = false;
  }

  goHome() {
    this.createPortfolio = false;
    this.displayPortfolio = false;
    this.portfolioHome = true;
  }

  ngOnInit(): void {
  }


}
