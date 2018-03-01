import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the EventNamePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'eventName',
})
export class EventNamePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string): string {
    return value
      .toLowerCase()
      .replace(/event/, '');
  }
}
