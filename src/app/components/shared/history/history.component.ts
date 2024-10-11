import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  vacationHistory = [
    {
      type: 'Annual Vacation',
      startDate: '2/3/2023',
      endDate: '10/3/2023',
      days: 8,
      approvedBy: 'Hazem Azmi'
    },
    {
      type: 'Sick Vacation',
      startDate: '2/3/2023',
      endDate: '10/3/2023',
      days: 8,
      approvedBy: 'Hazem Azmi'
    },
    {
      type: 'Non Paid Vacation',
      startDate: '2/3/2023',
      endDate: '10/3/2023',
      days: 8,
      approvedBy: 'Hazem Azmi'
    },
    {
      type: 'Sick Vacation',
      startDate: '2/3/2023',
      endDate: '10/3/2023',
      days: 8,
      approvedBy: 'Hazem Azmi'
    },
    {
      type: 'Annual Vacation',
      startDate: '2/3/2023',
      endDate: '10/3/2023',
      days: 8,
      approvedBy: 'Hazem Azmi'
    },
    {
      type: 'Sick Vacation',
      startDate: '2/3/2023',
      endDate: '10/3/2023',
      days: 8,
      approvedBy: 'Hazem Azmi'
    }
  ];
}
