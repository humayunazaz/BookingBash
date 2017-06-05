import { FormControl } from '@angular/forms';

export class emailValidator{

  static emailValid(control:FormControl){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(control.value)){
      return null;
    } else {
      return { emailValid: true };
    }
  }
  static dayValid(control:FormControl){
    if(control.value <= 31 && control.value > 0){
      return null;
    } else{
      return { dayValid: true };
    }
  }
  static monthValid(control:FormControl){
    if(control.value <= 12 && control.value > 0){
      return null;
    } else{
      return { monthValid: true };
    }
  }
  static yearValid(control:FormControl){
    if(control.value <= 2010 && control.value > 1940){
      return null;
    } else{
      return { yearValid: true };
    }
  }
}
