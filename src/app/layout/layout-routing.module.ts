import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'view-profile', component: ViewProfileComponent },
            { path: 'account-statement', component: AccountStatementComponent }

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
