import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Platform } from 'ionic-angular';

/*
  Generated class for the ActivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActivityProvider {

  constructor(
    public http: HttpClient,
    public platform: Platform,
  ) {
    console.log('Hello ActivityProvider Provider');
  }

  getActivities(username: string): Observable<Object> {
    const url = `users/${username}/events`;
    if (this.platform.is('mobile')) {
      return this.http.get(`https://api.github.com/${url}`);
    } else {
      return this.http.get(`/github/${url}`);
    }
  }

  getActivity(id: number): Object {
    const events = JSON.parse(localStorage.getItem('events')).find((item) => {
      return (item.id === id);
    });
    return events;
  }

}
