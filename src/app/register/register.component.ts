import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  kgValue;
  dateValue = this.now();
  locationValue;

  constructor() {
  }

  ngOnInit() {
  }

  register() {
    console.log(this.kgValue);
    console.log(this.dateValue);
    console.log(this.locationValue);
    window.postMessage({
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
