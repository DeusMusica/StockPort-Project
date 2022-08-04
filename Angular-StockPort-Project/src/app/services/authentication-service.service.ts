import { Injectable } from '@angular/core';
import { AuthenticationInfo } from '../models/AuthenticationModel';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public basePath: string = 'http://localhost:5160'
  public userID: Number | undefined = 0;
  public statusCodeNumber: Number = 0;

  constructor(protected httpClient: HttpClient) { }

  async userAuthentication(LoginInfo: AuthenticationInfo) {
    const endpoint = 'http://localhost:5160/authentication';
    // this.showErrorMessage = false;
    let success = false;
    const respoonse = await this.httpClient
      .post<AuthenticationInfo>(endpoint, LoginInfo)
      .toPromise()
      .then(userInfo => {
        success = true;
        this.userID = userInfo?.pK_CustomerID
      })
      .catch(err => { success: false })
    return success;
  }
}

