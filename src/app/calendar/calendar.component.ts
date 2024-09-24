import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SessionServiceService } from '../session-service.service';
import { AuthServiceService } from '../auth-service.service'; // Import AuthService to get the memberId

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentMonth: number;
  currentYear: number;
  daysInMonth!: number[];
  currentDay: number;
  selectedDay!: number | null;
  userReservations: any[] = []; // Store the reservations
  memberId !: number | null  // Member ID fetched from AuthService

  constructor(
    private sessionService: SessionServiceService,
    private auth: AuthServiceService, // Inject AuthService to get the memberId
    private cdr: ChangeDetectorRef
  ) {
    const today = new Date();
    this.currentMonth = today.getMonth(); // 0 (January) to 11 (December)
    this.currentYear = today.getFullYear();
    this.currentDay = today.getDate();
    this.memberId = this.auth.getUserId(); // Fetch memberId from AuthService
  }

  ngOnInit() {
    this.updateDaysInMonth();
    this.selectedDay = this.currentDay; // Automatically select today's date if it's the current month
    if (this.selectedDay) {
      const formattedDate = this.formatDate(this.currentYear, this.currentMonth + 1, this.selectedDay);
      this.fetchUserReservations(formattedDate); // Fetch reservations for today's date on initialization
    }
  }

  // Method to get the days in a given month and year
  getDaysInMonth(month: number, year: number): number[] {
    const date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date).getDate());
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  // Update the days when month/year changes
  updateDaysInMonth() {
    this.daysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
  }

  // Move to the previous month
  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11; // December of the previous year
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.updateDaysInMonth();
    this.selectedDay = null; // Reset selected day when changing month
    this.userReservations = []; // Clear reservations when changing month
  }

  // Move to the next month
  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0; // January of the next year
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.updateDaysInMonth();
    this.selectedDay = null; // Reset selected day when changing month
    this.userReservations = []; // Clear reservations when changing month
  }

  // Check if a day is selected
  isSelectedDay(day: number): boolean {
    return day === this.selectedDay;
  }

  onDayClick(day: number, event: MouseEvent): void {
    event.stopPropagation();

    this.selectedDay = day;
    const formattedDate = this.formatDate(this.currentYear, this.currentMonth + 1, day);
    this.fetchUserReservations(formattedDate);

    // Trigger change detection after updating the state
    this.cdr.detectChanges();
  }

  // Format the date as 'yyyy-MM-dd'
  formatDate(year: number, month: number, day: number): string {
    const monthString = month < 10 ? `0${month}` : month;
    const dayString = day < 10 ? `0${day}` : day;
    return `${year}-${monthString}-${dayString}`;
  }

  // Fetch user reservations for a specific date
  fetchUserReservations(date: string): void {
    if (this.memberId) {
      this.sessionService.getUserReservationsByDATE(this.memberId, date).subscribe(
        (reservations) => {
          this.userReservations = reservations || []; // Ensure it's always an array
        },
        (error) => {
          console.error('Error fetching reservations:', error);
          this.userReservations = []; // Reset to empty array on error
        }
      );
    }
  }

  // Get the name of the month for display
  getMonthName(month: number): string {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month];
  }
}
