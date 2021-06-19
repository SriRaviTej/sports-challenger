import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  pageRendered: string = '';
  showUserOptions: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.pageRendered = this.router.url;
  }
  chooseTab(renderedPage: string): any {
    this.pageRendered = renderedPage;
  }
  toogleUserOptions(): any {
    this.showUserOptions = !this.showUserOptions;
  }
}
