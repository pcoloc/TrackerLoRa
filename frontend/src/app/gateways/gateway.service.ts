import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { data } from './ttn-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class gatewayService {

  ttnUrl = 'https://eu1.cloud.thethings.network/api/v3/gs/gateways/dragino-pac/connection/stats';
  token = 'NNSXS.U3E3JTHSBIAPCIG4FTBNFTQCI6UVXH5NS5Q6VJQ.HO6ADLF4DG7AXSWLU5T46PG2ZTYNZZ5KXQXASCHS7PVHR5NJLZWQ'
  httpOptions = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),

  }
  constructor(private http: HttpClient) { }
  getData(): Observable<data> {
    // Testing here
    let requestURL = this.ttnUrl;
    return this.http.get<data>(requestURL, this.httpOptions);
  }

}
