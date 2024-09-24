import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  apiurl = "http://localhost:8090/api/subcriptions"
  constructor(private http: HttpClient) { }

  GetSubscriptions() : Observable<any[]>{
      return this.http.get<any>(this.apiurl)
  }
  addsubscriptions(subcriptions : any): Observable<any> {
    return this.http.post<any>( this.apiurl ,subcriptions );
  }
  
}
