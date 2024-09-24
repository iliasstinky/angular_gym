import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  constructor(private Http : HttpClient , private authService: AuthServiceService) { }
  apiurl= 'http://localhost:8090/api/session'






  public CreateSessions(session : any): Observable<any> {

      return  this.Http.post<any[]>(`${this.apiurl}` , session)
  }
  public GetallSessions(): Observable<any[]> {
    return  this.Http.get<any[]>(this.apiurl)

  }

  public ReserveSessions(sessionId : number , memberId: number) : Observable<any | string /*this is because the reponseEntity TYPE is a  strign */ > {
     
      if (memberId === null){
        return throwError(() => new Error('User not logged in.'));
      }
      return this.Http.post<any[]>( `${this.apiurl}/${sessionId}/reserve` , null /*null for the body because we dont need to send a body*/ , {params : {memberId}  } )
  }



  public GetreservationsbyId(memberId : number | null) : Observable<any>{
    if (memberId === null){
      return throwError(() => new Error('User not logged in.'));
    }
      return this.Http.get<number>(`${this.apiurl}/${memberId}/reservations`);

  }

  getUserReservationsByDATE(memberId: number, date: string): Observable<any> {
    let params = new HttpParams().set('date', date);
    return this.Http.get<any>(`${this.apiurl}/${memberId}/reservationBydate`, { params });
  }

}

