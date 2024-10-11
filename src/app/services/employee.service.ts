import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeeDetails() {
    return {
      name: 'Ahmad Azmi',
      position: 'Junior Accounting Officer',
      department: 'Marketing Department',
      reportingTo: 'Salwa Assem',
      corporateLevel: 'Level 10',
      lifetime: '2.5 Years',
      vacationDaysLeft: 14,
      sickDaysLeft: 14
    };
  }
}

