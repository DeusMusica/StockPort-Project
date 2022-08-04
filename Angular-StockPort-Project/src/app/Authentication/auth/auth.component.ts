import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterEvent } from '@angular/router';
import { AuthenticationInfo } from '../../models/AuthenticationModel';
import { AuthenticationService } from '../../services/authentication-service.service';
import { PortfolioComponent } from '../../portfolio/portfolio.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public authenticationinfo: AuthenticationInfo = {};

  public showWarning: boolean = false;
  public goFoward: boolean = false;


  constructor(protected authenticationService: AuthenticationService, private router: Router) { }

  async userAuthentication(LoginInfo: AuthenticationInfo) {
    const loginResult = await this.authenticationService.userAuthentication(LoginInfo);
    if (loginResult) {
      this.router.navigateByUrl('/Portfolio');
    }
    else {
      this.showWarning = true;
    }
  }
  ngOnInit(): void {
  }
}