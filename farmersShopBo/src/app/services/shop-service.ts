import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { shop } from '../models/shop';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class ShopService {

  constructor(private http: HttpClient) {
  }

  getShop(id): Observable<shop> {
    return this.http.get<shop>(environment.apiUrl, {params: id})
  }

  createShop(shop:shop): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(shop);
    return this.http.post<shop>(environment.apiUrl, body, {'headers':headers});
  };

  updateShop(shop:shop): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(shop);
    return this.http.post(environment.apiUrl, body,{'headers':headers});
  };

}
