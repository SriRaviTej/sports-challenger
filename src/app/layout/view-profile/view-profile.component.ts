import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  selectedTab: string = "profile-details";

  constructor() { }

  ngOnInit() {
  }

  chooseTab(value: any): any {
    this.selectedTab = value;
  }

}
