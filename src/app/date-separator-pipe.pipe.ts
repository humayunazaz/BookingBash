import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sidebardate'
})
export class DateSeparatorPipe implements PipeTransform {

  transform(value: any, check: any): any {
      var date = value;
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'];
      var val;
      if (check == 'date'){
          val = date.toString().substr(6, 2);
      }
      else if (check == 'month'){
          var index = date.toString().substr(4, 2);
          val = months[index-1];
      }
      else{
          var day = date.toString().substr(6, 2);
          var month = date.toString().substr(4, 2);
          var year = date.toString().substr(0, 4);
          var mk_date = new Date(month + '/' + day + '/' + year);
          val = days[mk_date.getDay() - 1] + ',' + ' ' + months[month - 1] + ' ' + day + ', ' + year;
      }
      return val;
  }

}
