import { NgModule } from '@angular/core';
import { UrlTransformPipe } from './url-transform/url-transform';
import { EventNamePipe } from './event-name/event-name';

@NgModule({
  declarations: [
    UrlTransformPipe,
    EventNamePipe,
  ],
	imports: [],
  exports: [
    UrlTransformPipe,
    EventNamePipe,
  ]
})
export class PipesModule {}
