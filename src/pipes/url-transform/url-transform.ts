import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the UrlTrainsformPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'urlTransform',
})
export class UrlTransformPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string): string {
    return value
      .replace(/api\./, '')
      .replace(/repos\//, '')
      .replace(/commits/, 'commit');
  }
}
