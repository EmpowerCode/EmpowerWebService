import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  kgValue;
  dateValue;
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

}
