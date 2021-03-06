import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import * as OktaAuth from "@okta/okta-auth-js";

@Injectable()
export class OktaAuthService {

  oktaAuth = new OktaAuth({
    url: "",
    clientId: "",
    issuer: "/oauth2/default",
    redirectUri: "/callback"
  });

  constructor(private router: Router) { }

  isAuthenticated() {
    // Checks if there is a current accessToken in the TokenManager
    return !this.oktaAuth.tokenManager.get("accessToken");
  }

  login() {
    // Launches the login redirect
    this.oktaAuth.token.getWithRedirect({
      responseType: ["id_token", "token"],
      scopes: ["openid", "email", "profile"]
    });
  }

  async handleAuthentication() {
    const tokens = await this.oktaAuth.token.parseFromUrl();
    tokens.forEach(token => {
      if(token.idToken) {
        this.oktaAuth.tokenManager.add("idToken", token);
      }
      if(token.accessToken) {
        this.oktaAuth.tokenManager.add("accessToken", token);
      }
    });
  }

  async logout() {
    this.oktaAuth.tokenManager.clear();
    await this.oktaAuth.signOut();
  }


}
