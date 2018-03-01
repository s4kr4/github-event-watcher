import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController,
} from 'ionic-angular';

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
    private alertController: AlertController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
    this.activity = JSON.parse(localStorage.getItem('events'));
  }

  getActivities() {
    const username: string = this.username;

    if (!username) return;

    const loader = this.loadingController.create({
      content: 'Loading...'
    });
    loader.present();

    this.activityProvider.getActivities(username).subscribe((response: any) => {
      localStorage.setItem('events', JSON.stringify(response));
      this.activity = response;
      loader.dismiss();
    }, (error: any) => {
      this.activity = [];
      loader.dismiss();

      const alert = this.alertController.create({
        title: 'Not found!',
        subTitle: 'The user you typed does not exist.',
        buttons: ['OK'],
      });
      alert.present();
    });
  }

  openDetail(id) {
    this.navCtrl.push('ActivityDetailPage', {
      activityId: id,
    });
  }
}
