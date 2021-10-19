import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.page.html',
  styleUrls: ['./new-word.page.scss'],
})
export class NewWordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerNewWord(espanolw: string, purepechaw: string, reference: string) {
    console.log(espanolw, purepechaw, reference);
    
  }

}
