import { Component, OnInit } from '@angular/core';
import { AuthenticationInfo } from '../../models/AuthenticationModel';
import { AuthenticationService } from '../../services/authentication-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public authenticationinfo: AuthenticationInfo = {};

  constructor(protected authenticationService: AuthenticationService) { }
  
  async userAuthentication(LoginInfo: AuthenticationInfo) {
    this.authenticationinfo = await this.authenticationService.userAuthentication(LoginInfo);
  }
  ngOnInit(): void {
  }
  // async userAuthentication(LoginInfo: AuthenticationInfo) {
  //   this.LoginInfo = await this.authenticationService.AuthenticationInfo(LoginInfo);
  // }

  // async hiddenSwitch () {
  //   this.showLogin = false;
  //   this.showNewCustomer = true;
  // }
}