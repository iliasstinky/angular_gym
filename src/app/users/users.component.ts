import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MemberService } from '../member.service';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'age', 'email', 'phone', 'role'  ,'Edit', 'Delete' ];
  members = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private memberService: MemberService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(): void {
    this.memberService.getMembers().subscribe((data: any[]) => {
      this.members.data = data;
      this.members.paginator = this.paginator;
    });
  }

  onEditUser(user: any): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '300px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.memberService.updateMember(result).subscribe(() => {
          console.log('User updated successfully');
          this.loadMembers();  // Refresh the list of members
        }, error => {
          console.error('Error updating user', error);
        });
      }
    });
  }
  DeleteMembers(memberId: number): void {
    console.log(`Attempting to delete member with ID: ${memberId}`); // Debug log
    this.memberService.deletememebers(memberId).subscribe({
        next: () => {
            console.log('Delete successful'); // Debug log
            this.loadMembers(); // Refresh the list after deletion
        },
        error: (error) => {
            console.error('Deletion failed', error); // Debug log
        }
    });
}

}
