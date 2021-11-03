import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.page.html',
  styleUrls: ['./new-word.page.scss'],
})
export class NewWordPage implements OnInit {

  formNewWords: FormGroup;
  
  constructor(
    public dictionaryService: DictionaryService,
    public router: Router,
    public location: Location,
    formBuilder: FormBuilder
  ) {
    this.formNewWords = formBuilder.group({
      purepechaw : new FormControl('', Validators.compose([
        Validators.required
      ])),
      espanolw : new FormControl('', Validators.compose([
          Validators.required
      ])),
      reference : new FormControl('', Validators.compose([
          Validators.required
      ]))
    });
  }

  ngOnInit() {
  }

  async registerNewWord(espanolw: string, purepechaw: string, reference: string) {
    const me = this;
    if (me.formNewWords.valid) {
      await this.dictionaryService.registerWords({espanolw, purepechaw, reference}).toPromise();
      // espera a el registro y regresa a listado
      this.router.navigate(['/dictionary']).then(() => window.location.reload());
    }
    else {
      console.log('empty fields');
    }
  }

}
