import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'parent-app';
  @ViewChild('iframeRef', {static:true}) iframeRef: ElementRef;
  isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
  input !== null && input.tagName === 'IFRAME';

  onParentClick() {
    const message = JSON.stringify({
      message: 'Hello from Parent Window',
      date: Date.now(),
    });

    let frame = this.iframeRef.nativeElement;
    console.log(frame);
    if (this.isIFrame(frame) && frame.contentWindow) {
      frame.contentWindow.postMessage(message, 'http://localhost:4210');
    }
  }

}
