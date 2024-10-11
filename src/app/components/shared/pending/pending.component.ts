import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
interface PendingRequest {
  name: string;
  submittedOn: string;
  duration: string;
  currentAt: string;
  profileImage: string;
}

@Component({
  selector: 'app-pending-requests',
  standalone: true,
  imports: [CommonModule,RouterModule ,RouterLink],
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingRequestsComponent {
  pendingRequests: PendingRequest[] = [
    {
      name: 'Ahmad Attar',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      currentAt: 'Omar Ahmad',
      profileImage: 'https://w7.pngwing.com/pngs/130/766/png-transparent-techture-job-user-profile-linkedin-skill-akshay-kumar-miscellaneous-architect-linkedin.png'
    },
    {
      name: 'Eric Griffin',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      currentAt: 'Omar Ahmad',
      profileImage: 'https://w7.pngwing.com/pngs/130/766/png-transparent-techture-job-user-profile-linkedin-skill-akshay-kumar-miscellaneous-architect-linkedin.png'
    }
  ];
}
