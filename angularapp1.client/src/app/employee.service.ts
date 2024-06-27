import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.apiUrl}`);
  }

  public getEmployeeById(id : number) : Observable<Employee> {
    return this.http.get<Employee>(`${environment.apiUrl}/${id}`);
  }

  public createEmployee(employee: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>(`${environment.apiUrl}`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${environment.apiUrl}`, employee);
  }

  public deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${environment.apiUrl}/${id}`);
  }

}
