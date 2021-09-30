import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurepechaService {

  private MyBaseUrl: string = environment.BASE_API_URL;

  constructor(
    private readonly _http: HttpClient,
  ) { }


  public listPurepecha(): Observable<Object> {

    return this._http.get<any>(
      this.MyBaseUrl + "purepecha",
      {
        responseType: "json"
      }
    );

  }

}
