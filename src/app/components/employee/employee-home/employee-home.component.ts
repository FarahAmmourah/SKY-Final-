import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageSliderComponent } from "../../shared/image-slider/image-slider.component";
import { SharedCardComponent } from "../../shared/shared-card/shared-card.component";
import { VacationRequestsComponent } from '../../vacation-requests/vacation-requests.component';
import { EmployeeService } from '../../../services/employee.service';
@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  standalone: true,
  imports: [CommonModule, SharedCardComponent, ImageSliderComponent, VacationRequestsComponent],
})
export class EmployeeHomeComponent implements OnInit {
  employee: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployeeDetails();
  }
}
