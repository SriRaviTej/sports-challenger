import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    LayoutRoutingModule,
    MDBBootstrapModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule {

}
