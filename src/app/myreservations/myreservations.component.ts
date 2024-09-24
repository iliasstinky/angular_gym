import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionServiceService } from '../session-service.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-myreservations',
  templateUrl: './myreservations.component.html',
  styleUrls: ['./myreservations.component.css']
})
export class MyreservationsComponent implements OnInit {
  reservations: any[] = []; // Array to hold the list of reservations
  userId!: number | null;

  constructor(private http: HttpClient, private sessionservice: SessionServiceService, private auth: AuthServiceService) {}

  ngOnInit(): void {
    this.showUserSessions();
  }

  public showUserSessions(): void {
    this.userId = this.auth.getUserId();
    this.sessionservice.GetreservationsbyId(this.userId).subscribe(
     response => {
        this.reservations = response; // Store the reservations in the array
        console.log("User reservations:", this.reservations);
      },
      error => {
        console.error("Error fetching reservations:", error);
      }
    );
  }
}
