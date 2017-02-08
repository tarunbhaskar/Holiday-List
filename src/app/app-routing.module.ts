import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { HolidayDetailComponent } from './holiday-detail/holiday-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo : '/holiday-list',
    pathMatch: 'full'
  },{
    path: 'holiday-list',
    component: HolidayListComponent
  }, {
    path: 'holiday-detail',
    component: HolidayDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
