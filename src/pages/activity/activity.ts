import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ActivityProvider } from '../../providers/activity/activity';

/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {

  username: string = '';
  activity: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    public activityProvider: ActivityProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
  }

  getActivity() {
    const username: string = this.username;

    if (!username) return;

    const loader = this.loadingController.create({
      content: 'Loading...'
    });
    loader.present();

    this.activityProvider.getEvents(username).subscribe((response: any) => {
      localStorage.setItem('events', JSON.stringify(response));
      this.activity = response;
      loader.dismiss();
    }, (error: any) => {
      loader.dismiss();
    })
  }

  openDetail(id) {
    const detail = this.activityProvider.getEventDetail(id)[0];
    this.navCtrl.push('ActivityDetailPage', {
      activityId: detail.id,
      activity: detail,
    });
  }
}
