import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReferenceModel } from '../models/referenceModel';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private MyBaseUrl: string = environment.BASE_API_URL;

  constructor(
    private readonly _http: HttpClient,
  ) { }

  public listDictionary(): Observable<Object> {

    return this._http.get<any>(
      this.MyBaseUrl + "dictionary",
      {
        responseType: "json"
      }
    );

  }

  public searchWord( key: string ): Observable<Object> {
    return this._http.get<ReferenceModel>(
      this.MyBaseUrl + "dictionary/search/" + key,
      {
        responseType: "json"
      }
    )
  }
}
