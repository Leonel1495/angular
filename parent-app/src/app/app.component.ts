import { Component, ViewChild, ElementRef, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('appComponentRef', {static: true}) appComponentRef: ElementRef;
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
    if (this.isIFrame(frame) && frame.contentWindow) {
        frame.contentWindow.postMessage(message, 'http://localhost:4210');
    }
  }

}
