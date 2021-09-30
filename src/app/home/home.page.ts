import { Component } from '@angular/core';
import { PurepechaWords } from '../models/purepecha-words';
import { PurepechaService } from '../services/purepecha.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public purepechaw?: PurepechaWords[];

  constructor(
    public purepechaService: PurepechaService,
  ) {}


  ngOnInit(): void {

    this.purepechaService.listPurepecha()
    .subscribe(
      list => {
        console.log(list);
        this.purepechaw = ( <PurepechaWords[]> list )
      }
    )

  }

}
