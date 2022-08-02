import { Injectable } from '@angular/core';
import { AuthenticationInfo } from '../models/AuthenticationModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public basePath: string = 'http://localhost:5160'
  constructor(protected httpClient: HttpClient) { }

  async userAuthentication(LoginInfo: AuthenticationInfo) {
    const endpoint = 'http://localhost:5160/authentication';

    return await this.httpClient
      .post(endpoint, LoginInfo)
      .toPromise()
      .then(userInfo => userInfo ?? <AuthenticationInfo>{});
  }
}

