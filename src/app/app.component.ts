import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string;
  @ViewChild('iframe') iFrame: ElementRef;

  ngOnInit() {
    window.onmessage = e => this.title = e.data;
  }

  iFrameGoTo(x) {
    this.iFrame.nativeElement.contentWindow.postMessage({
      route: `app${x}`
    }, '*');
  }

  sendData(data) {
    this.iFrame.nativeElement.contentWindow.postMessage({
      info: data
    }, '*');
  }

}
