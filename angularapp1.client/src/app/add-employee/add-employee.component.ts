import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../employee.model';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { employee: Employee },
    private employeeService: EmployeeService
  ) {}
  @Input() employee: Employee = new Employee();
  @Output() employeeCreated = new EventEmitter<Employee[]>();

  saveEmployee(employee: Employee) {
    if (employee) {
      this.employeeService.createEmployee(employee).subscribe({
        next: (result: Employee[]) => {
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
