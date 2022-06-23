import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConfig {

  constructor(
    public http: HttpClient,
  ) { }

  public get host() {
    return `https://rickandmortyapi.com/api/`;
  }

  public get<T = any>(path: string, query?: any): Observable<T> {
    const URL = `${this.host}${path}${this.getPathFilter(query || {})}`;
    return this.http.get<T>(URL);
  }

  private getPathFilter(query: any) {
    const emptyIgnore = [null, undefined, 'undefined', ''];
    if (Object.keys(query).length > 0) {
      const res = [];
      for (const key in query) {
        if (query.hasOwnProperty(key) && !emptyIgnore.includes(query[key])) {
          res.push(`${key}=${query[key]}`);
        }
      }
      return `?${res.join('&')}`;
    }
    return '';
  }

}
