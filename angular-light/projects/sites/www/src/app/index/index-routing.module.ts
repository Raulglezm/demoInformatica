import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppIndexComponent } from './index.component';

const routes: Routes = [
  {
    path: '**',
    component: AppIndexComponent
  },
  {
    path: '',
    component: AppIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppIndexRoutingModule { }
