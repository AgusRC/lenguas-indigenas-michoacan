import { Component, OnInit } from '@angular/core';
import { PurepechaWords } from 'src/app/models/purepecha-words';
import { ReferenceModel } from 'src/app/models/referenceModel';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { PurepechaService } from 'src/app/services/purepecha.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})
export class DictionaryPage implements OnInit {

  public purepechaw?: PurepechaWords[];
  public references?: ReferenceModel[];

  constructor(
    public purepechaService: PurepechaService,
    public dictionaryService: DictionaryService,
  ) {}


  ngOnInit(): void {
    this.dictionaryService.listDictionary()
    .subscribe(
      list => {
        this.references = ( <ReferenceModel[]> list );
      }
    );
  }

  search( evt ): void {
    const key = evt.srcElement.value;
    if (!key) {
      this.ngOnInit();
    }

    this.dictionaryService.searchWord( key )
    .subscribe(
      list => {
        this.references = ( <ReferenceModel[]> list );
      }
    );
  }

}
