import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewWordPageRoutingModule } from './new-word-routing.module';

import { NewWordPage } from './new-word.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewWordPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewWordPage]
})
export class NewWordPageModule {}
