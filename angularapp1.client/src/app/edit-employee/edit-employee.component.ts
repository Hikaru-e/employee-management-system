import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from './../employee.service';
import { Employee } from '../employee.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent {

  employee : Employee;

  constructor(
    public dialogRef: MatDialogRef<EditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { employee: Employee },
    private employeeService: EmployeeService
  ) {
    this.employee = data.employee;
  }

  updateEmployee(employee: Employee) {
    if (employee) {
      this.employeeService.updateEmployee(employee).subscribe({
        next: (result: Employee) => {
          console.log(result);
          this.dialogRef.close(true);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        },
      });
    }
  }
}
