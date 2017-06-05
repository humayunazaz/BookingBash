import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timing_separator'
})
export class TimingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split(',');
  }

}
