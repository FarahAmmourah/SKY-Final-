import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { HistoryComponent } from "../../shared/history/history.component";
import { PendingRequestsComponent } from '../../shared/pending/pending.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-profile',
  standalone: true,
  imports: [HistoryComponent, PendingRequestsComponent, RouterLink],
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css'],
})
export class EmployeeProfileComponent implements OnInit {
  employeeDetails: any;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeDetails = this.employeeService.getEmployeeDetails();
  }
}
