import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { UsersComponent } from '../users/users.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css'
})
export class AddUserFormComponent implements OnInit {
  newUser : any = {}
  constructor( private memberservice : MemberService , private router : Router ){}
  user : any

ngOnInit(): void {}
   addUser():void {
     this.memberservice.addmemebers(this.newUser).subscribe( 
     
      next => {
        this.router.navigate(["/users"])
      },

      error => {
        console.log("error creatign a user")
      }
   )
   }
}