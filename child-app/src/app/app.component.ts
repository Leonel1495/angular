import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'child-app';
  message: string = '';
  date: string = '';

  constructor() { 
    if (window.addEventListener) {
      window.addEventListener("message", this.receiveMessage.bind(this), false);
    } else {
       (<any>window).attachEvent("onmessage", this.receiveMessage.bind(this));
    }
  }

  receiveMessage(event: MessageEvent )
  {
    if (event.origin !== "http://localhost:4200")
      return;
    let data = JSON.parse(event.data);
    let date = new Date(data.date * 1000)
    console.log('message', data.message, date);
    this.message = data.message;
    this.date = date.toString();
  }


  ngOnInit(): void {
     
  }


}
