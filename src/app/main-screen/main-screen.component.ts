import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  public isRegisteredCollector: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    window.addEventListener("message", event => {
      if (event.data.requestName === "sendIsRegisteredCollector") {
        this.isRegisteredCollector = event.data.data.isRegisteredCollector;
        this.changeDetectorRef.detectChanges();
      }
    }, false);

    window.parent.postMessage({
      requestName: "getIsRegisteredCollector"
    }, "*");
  }

  ngOnInit() {

  }

}
