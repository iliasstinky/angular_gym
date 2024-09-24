import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { SubscriptionService } from '../subscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subscription-form',
  templateUrl: './add-subscription-form.component.html',
  styleUrls: ['./add-subscription-form.component.css']
})
export class AddSubscriptionFormComponent implements OnInit {
  newSubscription: any = {
    memberId: null,  // Ensure memberId is initialized
    start_date: '',
    end_date: '',
    type: '',
    status: ''
  };
  members: any = [];
  subsciptionmemberid: any = {}
  constructor(private memberService: MemberService , private subscriptionService : SubscriptionService , private router : Router) {}

  ngOnInit(): void {
    this.loadMembers();
  }


  //this is to load meme members
  loadMembers(): void {
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
      console.log(members)
    });
  }
    
  addSubscription(): void {
    if (true) {
      this.subscriptionService.addsubscriptions(this.newSubscription).subscribe(
        response => {
          console.log('Subscription added successfully', response);
          this.newSubscription = {
            memberId: null,  // Reset to clear form
            start_date: '',
            end_date: '',
            type: '',
            status: ''
          };
        },
        error => {
          console.error('Error adding subscription', error);
        }
      );
      
    } else {
      console.warn('Form is not valid');
    }
    this.router.navigate((['/subscriptions']))

  }

  // Optional: A simple method to check if the form is valid
  private isFormValid(): boolean {
    // Add your form validation logic here
    return this.newSubscription.memberId && this.newSubscription.start_date && this.newSubscription.end_date; // Example validation check
  }


  loadSubscriptions(): void {
    this.subscriptionService.GetSubscriptions().subscribe((data: any[]) => {
      console.log('Subscriptions:', data); // Log data to inspect its structure
      this.subsciptionmemberid.data = data;
    }, error => {
      console.error('API call error:', error);
    });
  }
  


}
