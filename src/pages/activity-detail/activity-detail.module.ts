import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityDetailPage } from './activity-detail';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ActivityDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityDetailPage),
    PipesModule,
  ],
})
export class ActivityDetailPageModule {}
