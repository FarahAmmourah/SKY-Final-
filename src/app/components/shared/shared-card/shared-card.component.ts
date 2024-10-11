import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared-card',
  standalone: true,
  templateUrl: './shared-card.component.html',
  imports: [CommonModule],
})
export class SharedCardComponent {
 @Input() vacationRequests: number = 10;
 @Input() leaveRequests: number = 10;
}
