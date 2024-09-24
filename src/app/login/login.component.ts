import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  userId: number = 0

  constructor(private authService: AuthServiceService, private router: Router) {}

  login(): void {
      
    this.authService.login( this.username, this.password )
    
      .subscribe(
        response => {
          console.log('Login successful', response);
          // Handle successful login, e.g., store authentication token
          // Redirect after successful login
          this.router.navigateByUrl('/home', { replaceUrl: true })
          .then(() => {
            // Force reload of the page
            window.location.reload();
          });
        },
        error => {
          console.log('Login failed', error);
        }
      );
  }
}