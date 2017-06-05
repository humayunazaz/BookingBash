import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app-service.service';

@Component({
  selector: 'home-sub',
  templateUrl: './home-subscribe.component.html',
  styleUrls: ['./home-subscribe.component.css']
})
export class HomeSubscribeComponent implements OnInit {

  constructor(private appService:AppService) { }
  email;
  message;
  btnText:any = [
    {
      title: 'Subscribe',
      redbtn: true
    }
  ];
  subscribe(){
    this.lun(this.email);
    this.email='';
  }
  lun(email){
    this.appService.emailSubscribe(email).subscribe(
      data => {
        if(data.Status == "ok"){
          this.message = "You have subscribed successfully, Thank you!";
        } else{
          this.message = "Please provide the correct email.";
        }
      }
    )
  }
  ngOnInit() {
  }

}
