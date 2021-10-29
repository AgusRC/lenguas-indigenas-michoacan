import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThatmythPageRoutingModule } from './thatmyth-routing.module';

import { ThatmythPage } from './thatmyth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThatmythPageRoutingModule
  ],
  declarations: [ThatmythPage]
})
export class ThatmythPageModule {}
