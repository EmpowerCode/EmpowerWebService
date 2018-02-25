import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  kgValue;
  dateValue = this.now();
  locationValue;
  addressValue;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    window.addEventListener("message", event => {
      if (event.data.requestName === "sendScanQrCode") {
        this.addressValue = event.data.data.scanQrCode;
        changeDetectorRef.detectChanges();
      }
    }, false);
  }

  ngOnInit() {

  }

  scanQrCode() {
    window.parent.postMessage({
      requestName: "getScanQrCode"
    }, "*");
  }

  register() {
    window.parent.postMessage({
      requestName: "registerWaste",
      data: {
        kg: this.kgValue,
        date: this.dateValue,
        location: this.locationValue
      }
    }, "*");
  }

  now() {
    const date = new Date();
    function ten (i) {
        return (i < 10 ? '0' : '') + i;
    };
    
    const YYYY = date.getFullYear();
    const  MM = ten(date.getMonth() + 1);
    const DD = ten(date.getDate());
    const HH = ten(date.getHours());
    const II = ten(date.getMinutes());
    const SS = ten(date.getSeconds());

    return YYYY + '-' + MM + '-' + DD + 'T' +
             HH + ':' + II + ':' + SS;
  }

}
