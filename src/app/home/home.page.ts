import { Component } from '@angular/core';
import { PurepechaWords } from '../models/purepecha-words';
import { PurepechaService } from '../services/purepecha.service';
import { DictionaryService } from '../services/dictionary.service'
import { ReferenceModel } from '../models/referenceModel';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public purepechaw?: PurepechaWords[];
  public references?: ReferenceModel[];

  constructor(
    public purepechaService: PurepechaService,
    public dictionaryService: DictionaryService,
  ) {}


  ngOnInit(): void {
   
  }

  

}
