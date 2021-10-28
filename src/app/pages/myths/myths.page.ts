import { Component, OnInit } from '@angular/core';
import { MythModel } from 'src/app/models/myth';
import { MythsService } from 'src/app/services/myths.service';

@Component({
  selector: 'app-myths',
  templateUrl: './myths.page.html',
  styleUrls: ['./myths.page.scss'],
})
export class MythsPage implements OnInit {
  public myths?: MythModel[];

  constructor(
    public mythService: MythsService,
  ) { }

  ngOnInit() {
    this.mythService.listMyths()
    .subscribe(
      list => {
        this.myths = ( <MythModel[]> list );
      }
    );
  }

}
