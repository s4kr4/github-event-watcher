import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ActivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActivityProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ActivityProvider Provider');
  }

  getActivity(username: string): Observable<Object> {
    return this.http.get(`/github/users/${username}/events`);
  }

}
