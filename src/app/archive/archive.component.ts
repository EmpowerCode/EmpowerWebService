import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  archive = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) { 
    window.addEventListener("message", event => {
      if (event.data.requestName === "sendArchive") {
        this.archive = event.data.data.archive;
        changeDetectorRef.detectChanges();
      }
    }, false);

    window.parent.postMessage({
      requestName: "getArchive"
    }, "*");
  }

  ngOnInit() {}

}
