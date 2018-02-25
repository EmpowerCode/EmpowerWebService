import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-deliver',
  templateUrl: './deliver.component.html',
  styleUrls: ['./deliver.component.css']
})
export class DeliverComponent implements OnInit {

  qrValue = ""; // TODO: Show waiting screen while waiting for address to come back from Zafeplace

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    window.addEventListener("message", event => {
      if (event.data.requestName === "sendAddress") {
        this.qrValue = event.data.data.address;
        changeDetectorRef.detectChanges();
      }
    }, false);

    window.parent.postMessage({
      requestName: "getAddress"
    }, "*");
  }

  ngOnInit() {
  }

}
