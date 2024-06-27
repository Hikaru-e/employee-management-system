import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee: Employee = new Employee();
  title = 'Employee App';

  // Inject the EmployeeService and MatDialog
  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // Fetch employees when the component is initialized
    this.getEmployees();
  }

  // Fetch employees using the employee service and saving it to the employee Array
  getEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (result: Employee[]) => {
        this.employees = result;
        // console.log(this.employees);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }

  initNewEmployee() {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '400px',
      data: { employee: new Employee() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getEmployees(); // Refresh the employee list after closing the dialog
      }
    });
  }

  editEmployee(employee: Employee) {
    this.selectedEmployee = employee;
    const dialogRef = this.dialog.open(EditEmployeeComponent, {
      width: '400px',
      data: { employee: employee },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getEmployees(); // Refresh the employee list after closing the dialog
      }
    });
  }
  deleteEmployee(employee: Employee) {
    const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
      width: '300px',
      data: { employee: employee },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Employee deleted');
        this.getEmployees(); // Refresh the employee list after closing the dialog
      } else {
        console.log('Delete operation was cancelled');
      }
    });
  }

  searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (
        employee.firstName?.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.lastName?.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.phoneNumber?.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.department?.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.position?.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (!key) {
      this.getEmployees();
    }
  }

}
