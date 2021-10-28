import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.page.html',
  styleUrls: ['./new-word.page.scss'],
})
export class NewWordPage implements OnInit {

  constructor(
    public dictionaryService: DictionaryService,
    public router: Router,
    public location: Location,
  ) { }

  ngOnInit() {
  }

  async registerNewWord(espanolw: string, purepechaw: string, reference: string) {
    console.log(espanolw, purepechaw, reference);
    await this.dictionaryService.registerWords({espanolw, purepechaw, reference}).toPromise();
    // espera a el registro y regresa a listado
    this.router.navigate(['/dictionary']).then(() => window.location.reload());
  }

}
