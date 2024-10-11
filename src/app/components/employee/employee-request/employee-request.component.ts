import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightSearchPipe } from '../../../highlight-search.pipe';
import { VacationService } from '../../../services/vacation.service';
import { PagerComponent } from "../../shared/pager/pager.component";

@Component({
  selector: 'app-employee-request',
  templateUrl: './employee-request.component.html',
  styleUrls: ['./employee-request.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightSearchPipe, PagerComponent]
})
export class employeeRequestComponent implements OnInit {
  searchTerm: string = '';
  selectAll: boolean = false;
  vacationRequests: any[] = [];
  filteredRequests: any[] = [];
style: any;

  constructor(private vacationService: VacationService) {}

  ngOnInit() {
    this.vacationRequests = this.vacationService.getVacationRequests().slice(0,9);
    this.filteredRequests = [...this.vacationRequests];
  }
  filterRequests() {
    const term = this.searchTerm.toLowerCase();
    this.filteredRequests = this.vacationRequests.filter((request) => {
      return (
        request.name.toLowerCase().includes(term) ||
        request.duration.toLowerCase().includes(term) ||
        request.salary.toString().includes(term)
      );
    });
  }
  // Handle "Select All" checkbox
  toggleSelectAll() {
    this.selectAll = !this.selectAll;
  }
}
