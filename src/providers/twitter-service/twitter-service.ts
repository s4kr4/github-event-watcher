import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuth } from 'oauth';

/*
  Generated class for the TwitterServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TwitterServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TwitterServiceProvider Provider');
  }

  oauth() {
    const oauth = new OAuth(
      '/oauth/request_token',
      '/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET,
      '1.0A',
      'http://localhost:8100/oauth/callback/',
      'HMAC-SHA1',
    );

    oauth.getOAuthRequestToken(function (error, oauth_token, oauth_token_secret, results) {
      if (error) {
        console.log(error);
      }
      console.log(`${oauth_token}:${oauth_token_secret}`);
    });
    return oauth;
  }

}
