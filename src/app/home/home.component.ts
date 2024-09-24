import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { SessionServiceService } from '../session-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId: number | null = null;

  constructor(
    private authService: AuthServiceService,
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
  }

}
