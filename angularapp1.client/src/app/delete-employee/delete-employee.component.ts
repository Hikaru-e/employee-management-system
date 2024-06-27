import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service'; // Adjust the path as necessary
import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../employee.model'; // Adjust the path as necessary

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService
  ) {}

  onDeleteConfirm(): void {
    this.employeeService.deleteEmployee(this.data.employee.id).subscribe({
      next: (result: Employee) => {
        console.log(result);
        this.dialogRef.close(true); // Close dialog and return true
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        this.dialogRef.close(false); // Close dialog and return false
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close(false); // Close dialog and return false
  }
}
