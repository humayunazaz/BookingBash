import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brief'
})
export class briefPipe implements PipeTransform{
  transform(value:string, maxword:number){
    if(maxword){
      var limit = maxword;
    } else{
      limit = 50;
    }
    if(value){
      return value.substring(0, limit) + '...';
    }
  }
}
