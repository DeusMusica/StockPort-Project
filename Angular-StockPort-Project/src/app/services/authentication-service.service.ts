import { Injectable } from '@angular/core';
import { AuthenticationInfo } from '../models/AuthenticationModel';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public basePath: string = 'http://localhost:5160'
  public userID: Number = 0;
  public statusCodeNumber: Number = 0;
  public showErrorMessage: boolean = false;
  constructor(protected httpClient: HttpClient) { }

  
  async userAuthentication(LoginInfo: AuthenticationInfo) {
    const endpoint = 'http://localhost:5160/authentication';
    this.showErrorMessage=false;
    return await this.httpClient
      .post<AuthenticationInfo>(endpoint, LoginInfo)
      .toPromise()
      .then(userInfo => userInfo ?? <AuthenticationInfo>{})
      .catch(err => {this.showErrorMessage=true})
      
      

      
      //this.userID = response.pK_CustomerID || 0;
      
  }
}

