import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {

  constructor(private menu: MenuController) { }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
