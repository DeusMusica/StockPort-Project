import { Injectable } from '@angular/core';
import { AuthenticationInfo } from '../models/AuthenticationModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public basePath: string = 'http://localhost:5160'
  public userID: Number = 0;
  constructor(protected httpClient: HttpClient) { }
  
  async userAuthentication(LoginInfo: AuthenticationInfo) {
    const endpoint = 'http://localhost:5160/authentication';

    const response = await this.httpClient
      .post<AuthenticationInfo>(endpoint, LoginInfo)
      .toPromise()
      .then(userInfo => userInfo ?? <AuthenticationInfo>{});

      this.userID = response.pK_CustomerID || 0;
  }
}

