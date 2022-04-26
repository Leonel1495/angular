import { Component, ViewChild, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('iframeRef', {static:true}) iframeRef: HTMLIFrameElement;
  title = 'parent-app';
  isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
  input !== null && input.tagName === 'IFRAME';

  ngOnInit(): void {
  }
  
  onParentClick() {
    
    const message = JSON.stringify({
      message: 'Hello from Parent Window',
      date: Date.now(),
    });

    let frame = document.getElementById('frame');
    let frame2 = this.iframeRef;
    console.log(frame2);
    if (this.isIFrame(frame) && frame.contentWindow) {
        frame.contentWindow.postMessage(message, 'http://localhost:4210');
    }
  }

}
