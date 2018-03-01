import { NgModule } from '@angular/core';
import { UrlTransformPipe } from './url-transform/url-transform';

@NgModule({
  declarations: [
    UrlTransformPipe
  ],
	imports: [],
  exports: [
    UrlTransformPipe
  ]
})
export class PipesModule {}
