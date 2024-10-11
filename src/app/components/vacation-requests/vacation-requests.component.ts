import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HighlightSearchPipe } from '../../highlight-search.pipe';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VacationService } from '../../services/vacation.service';

interface VacationRequest {
  name: string;
  submittedOn: string;
  duration: string;
  salary: number;
  img: string;
}

@Component({
  selector: 'app-vacation-requests',
  templateUrl: './vacation-requests.component.html',
  standalone: true,
  imports: [CommonModule, HighlightSearchPipe, RouterLink, FormsModule],
  providers: [VacationService],
})
export class VacationRequestsComponent implements OnInit {
  vacationRequests: VacationRequest[] = [];
  filteredRequests: VacationRequest[] = [];
  searchTerm: string = '';

  constructor(private vacationService: VacationService) {}

  ngOnInit() {
    this.vacationRequests = this.vacationService.getVacationRequests().slice(0,3);
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
}
