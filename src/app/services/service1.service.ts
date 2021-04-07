import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://random-data-api.com/api/';

  getFoods() {
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    return this.http.get<any>(this.baseUrl + 'food/random_food?size=30');
  }
}
