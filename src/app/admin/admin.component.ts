import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { A } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  
  userId : number | null = null; ; //it was declared this way in aythservice



  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    console.log("the user id is " +this.userId)

    this.updateUserId();

  }
  updateUserId() {
    this.userId = this.authService.getUserId();
  }

  constructor (private http : HttpClient , private authService : AuthServiceService , private router : Router) {}
  
  
  loginpage():void {
      this.router.navigate(['/loginpage'])
  }


  logoutbutton(): void {
    localStorage.removeItem('userId');
    this.userId = null;
  
    // Optionally navigate to login page first
    this.router.navigateByUrl('/loginpage', { replaceUrl: true })
      .then(() => {
        // Force reload of the page
        window.location.reload();
      });
    }

}  
