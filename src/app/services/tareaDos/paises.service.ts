import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url: string = 'https://restcountries.com/v2/lang/es';

  constructor(private http: HttpClient) { }

  getPaisesData(): Observable<any> {
    return this.http.get(this.url);
  }
}
