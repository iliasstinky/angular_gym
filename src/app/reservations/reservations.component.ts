import { Component, OnInit } from '@angular/core';
import { SessionServiceService } from '../session-service.service'; // Adjust the path as needed
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'] // Note: Should be styleUrls, not styleUrl
})
export class ReservationsComponent implements OnInit {
  sessions: any[] = []; // Array to hold session data
  constructor(private sessionService: SessionServiceService , private http : HttpClient , private authService : AuthServiceService ) {}

  ngOnInit(): void {
    this.getallSessions();
  }

  getallSessions(): void {
    this.sessionService.GetallSessions().subscribe(
      data => {
        this.sessions = data;
      },
      error => {
        console.error('Error fetching sessions', error);
      }
    );
  }
  ss : any
  reservesession(sessionId: number): void {
    const memberId = this.authService.getUserId();
    if (memberId === null) {
      console.error('User not logged in.');
      return;
    }

    this.sessionService.ReserveSessions(sessionId, memberId).subscribe(
      response => {
        if (response === 'You have already reserved this session.') {
          console.log('Reservation response:', response);
          alert('You have already reserved this session.');
        } else if (response === 'No spots left') {
          alert('No spots left for this session.');
        } else {
          console.log('Reservation response:', response);
          alert('Reservation Successful');
        }
      },
      error => {
        console.error('Error reserving session', error);
      }
    );
    
  }
}

