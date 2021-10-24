import { Component, OnInit } from '@angular/core';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.page.html',
  styleUrls: ['./new-word.page.scss'],
})
export class NewWordPage implements OnInit {

  constructor(
    public dictionaryService: DictionaryService,
  ) { }

  ngOnInit() {
  }

  registerNewWord(espanolw: string, purepechaw: string, reference: string) {
    console.log(espanolw, purepechaw, reference);
    this.dictionaryService.registerWords({espanolw, purepechaw, reference}).subscribe(
      resp => {
        console.log(resp);
      }
    );
  }

}
