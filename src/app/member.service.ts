import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = 'http://localhost:8090/api/users';  // Replace with your actual API URL
  constructor(private http: HttpClient) { }

  getMembers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateMember(member: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${member.id}`, member);
    catchError(this.handleError)

  }
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
  
  deletememebers(memberId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${memberId}`);
  }

  addmemebers(member: any): Observable<any>{
        return this.http.post<any>(this.apiUrl , member)
  }

  

}
