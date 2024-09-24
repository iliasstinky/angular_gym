import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private loginUrl = 'http://localhost:8090/api/login'; // Your login API endpoint

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    
    const credentials = { username, password };
    return this.http.post<any>(this.loginUrl, credentials, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' } ),
      observe: 'response',
      withCredentials: true
    }).pipe(
      tap(response => {
        // Extract userId from the nested user object
        const userId = response.body?.user?.id;  // Adjust this based on your response structure json
        if (userId !== undefined) {
          // Store userId in local storage
          localStorage.setItem('userId', userId.toString());
        }
        else {
          localStorage.removeItem('userId');
        }
      }),
      catchError(error => {
        console.error('Login failed', error);
        return throwError(() => new Error('Login failed; please try again later.'));
      })
      
    );
  }
      
    
    getUserId(): number | null {
    const storedUserId = localStorage.getItem('userId');
    return storedUserId ? parseInt(storedUserId, 10) : null;
  }
  /*
  getiliaslocalestoredvar() : void{

    let iliass : string = "sss"
    localStorage.setItem ('iliass' , iliass);  
  }  */
}
