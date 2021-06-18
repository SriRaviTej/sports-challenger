import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    ViewProfileComponent,
    AccountStatementComponent
  ]
})
export class LayoutModule { }
