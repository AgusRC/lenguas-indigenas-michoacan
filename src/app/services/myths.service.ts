import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MythsService {

  private MyBaseUrl: string = environment.BASE_API_URL;
  constructor(
    private readonly http: HttpClient,
    ) { }

  public listMyths(): Observable<Object> {
    return this.http.get<any>(
      this.MyBaseUrl + 'myths',
      { responseType: 'json' }
    );
  }

  public getMyth(mythId: number): Observable<Object> {
    return this.http.get<any>(
      this.MyBaseUrl + 'myths/mythId/' + mythId,
      { responseType: 'json' }
    );
  }
}
