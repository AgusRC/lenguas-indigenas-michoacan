import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewWordPage } from './new-word.page';

const routes: Routes = [
  {
    path: '',
    component: NewWordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewWordPageRoutingModule {}
