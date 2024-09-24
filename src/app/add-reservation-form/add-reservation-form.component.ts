import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { SessionServiceService } from '../session-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reservation-form',
  templateUrl: './add-reservation-form.component.html',
  styleUrl: './add-reservation-form.component.css'
})
export class AddReservationFormComponent implements OnInit {

  newSession : any = {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
    constructor(private memberservice : MemberService ,  private sessionservice : SessionServiceService , private router : Router ){}

       
    addSession() : void {
          this.sessionservice.CreateSessions(this.newSession).subscribe(
          
          )
          this.router.navigate((['/reservations']))

    }
}
