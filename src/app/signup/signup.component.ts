import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemberService } from '../member.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] // corrected styleUrl to styleUrls
})
export class SignupComponent implements OnInit {

  username: string = '';
  password: string = '';
  age: number = 0;
  email: string = ''; // changed to string

  constructor(private http: HttpClient, private memberService: MemberService , private router : Router) {}

  ngOnInit(): void {
  }

  AddMember(): void {
    // Prepare the data to be sent
    const memberData = {
      username: this.username,
      password: this.password,
      age: this.age,
      email: this.email
    };

    this.memberService.addmemebers(memberData).subscribe(
      response => {
        console.log('Member created');
        this.router.navigate(["/loginpage"])
        
      },
      error => {
        console.log('Member not valid');
      }
    );
  }
}
