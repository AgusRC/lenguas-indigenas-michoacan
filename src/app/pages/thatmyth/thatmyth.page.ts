import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThatmythModel } from 'src/app/models/thatmyth';
import { MythsService } from 'src/app/services/myths.service';

@Component({
  selector: 'app-thatmyth',
  templateUrl: './thatmyth.page.html',
  styleUrls: ['./thatmyth.page.scss'],
})
export class ThatmythPage implements OnInit {
  thatmyth: ThatmythModel = {
    id: 0,
    title: '',
    body: '',
  };

  constructor(
    private route: ActivatedRoute,
    private mythService: MythsService,
    ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const mythId = Number(routeParams.get('mythId'));
    this.mythService.getMyth(mythId).subscribe(
      bodyPage => {
        this.thatmyth = JSON.parse(JSON.stringify(bodyPage));
      }
    );
  }

}
