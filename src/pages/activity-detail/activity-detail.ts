import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActivityProvider } from '../../providers/activity/activity';

/**
 * Generated class for the ActivityDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'activity/:activityId',
})
@Component({
  selector: 'page-activity-detail',
  templateUrl: 'activity-detail.html',
})
export class ActivityDetailPage {

  activity: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public activityProvider: ActivityProvider,
  ) {
  }

  ionViewDidLoad() {
    this.activity = this.activityProvider.getActivity(this.navParams.data.activityId);
    console.log(this.activity);
  }

}
