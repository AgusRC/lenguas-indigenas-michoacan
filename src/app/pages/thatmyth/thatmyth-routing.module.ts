import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThatmythPage } from './thatmyth.page';

const routes: Routes = [
  {
    path: '',
    component: ThatmythPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThatmythPageRoutingModule {}
