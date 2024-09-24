import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this.fb.group({
      id: [data.user.id],
      username: [data.user.username],
      email: [data.user.email],
      age: [data.user.age],
      phone: [data.user.phone],
      role : [data.user.role]
    });
  }

  onSave(): void {
    this.dialogRef.close(this.userForm.value);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

