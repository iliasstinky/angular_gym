import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: any[] = []; // All subscriptions
  filteredSubscriptions: any[] = []; // Filtered subscriptions (based on search)
  pagedSubscriptions: any[] = []; // Subscriptions for current page
  searchId: string = ''; // Search input binding
  pageSize: number = 5; // Number of items per page

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    this.loadSubscriptions();
  }

  loadSubscriptions(): void {
    this.subscriptionService.GetSubscriptions().subscribe((data: any) => {
      this.subscriptions = data;
      this.filteredSubscriptions = this.subscriptions; // Initially, no filter applied
      this.pagedSubscriptions = this.filteredSubscriptions.slice(0, this.pageSize);
    });
  }

  searchSubscription(): void {
    if (this.searchId) {
      this.filteredSubscriptions = this.subscriptions.filter(subscription =>
        subscription.id.toString().includes(this.searchId)
      );
    } else {
      // Reset if search is cleared
      this.filteredSubscriptions = this.subscriptions;
    }
    this.pagedSubscriptions = this.filteredSubscriptions.slice(0, this.pageSize); // Reset pagination
  }

  clearSearch(): void {
    this.searchId = ''; // Clear the search input
    this.searchSubscription(); // Reload all subscriptions
  }

  onPageChange(event: any): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedSubscriptions = this.filteredSubscriptions.slice(startIndex, endIndex);
  }
}
