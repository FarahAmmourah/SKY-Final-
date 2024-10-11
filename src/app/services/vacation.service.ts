import { Injectable } from '@angular/core';

interface VacationRequest {
[x: string]: any;
  name: string;
  submittedOn: string;
  duration: string;
  salary: number;
  img: string;
}

@Injectable({
  providedIn: 'root',
})
export class VacationService {
  private vacationRequests: VacationRequest[] = [
    {
      name: 'Ahmad Attar',
      submittedOn: '1/3/2024',
      duration: '1 Weeks (1/4/2023 - 7/4/2023)',
      salary: 1000,
      img: 'https://w7.pngwing.com/pngs/130/766/png-transparent-techture-job-user-profile-linkedin-skill-akshay-kumar-miscellaneous-architect-linkedin.png',
    },
    {
      name: 'Eric Griffin',
      submittedOn: '1/3/2024',
      duration: '3 Weeks (1/4/2024 - 20/5/2024)',
      salary: 2500,
      img: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png',
    },
    {
      name: 'Zachary Murphy',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      img: 'https://img.freepik.com/premium-photo/smiling-indian-office-employee-man_928503-71.jpg',
    },
    {
      name: 'Lucas Harris',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 500,
      img: 'https://img.freepik.com/premium-photo/office-employee-man-suit-giving-thumbs-up_928503-38.jpg',
    },
    {
      name: 'Gabriel Thompson',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000,
      img: 'https://img.freepik.com/premium-photo/smiling-busy-young-latin-business-man-manager-using-tablet-computer_1197797-50435.jpg',
    },
    {
      name: 'Ethan Taylor',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1020 ,
      img: 'https://img.freepik.com/free-photo/man-blue-suit-is-smiling-woman-blue-suit_1340-37833.jpg'
    },
    {
      name: 'Oliver White',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 1000 ,
      img: 'https://img.freepik.com/premium-photo/young-smart-businessman-standing-blur-background-office-generative-ai_141130-6354.jpg'
    },
    {
      name: 'Sean Hunt',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 850 ,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWG18FMyS1pXtWKr4Eb7_XLr0lScrVylmpg&s'
    },
    {
      name: 'Joseph Taylor',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 900 ,
      img: 'https://img.freepik.com/premium-photo/employee-labor_1299778-9656.jpg'
    },
    {
      name: 'Robert Davis',
      submittedOn: '1/3/2024',
      duration: '4 Weeks (1/4/2023 - 1/5/2023)',
      salary: 500 ,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThglveVb0FzpzwUv_nCBMULJv9VU2lNAPHmdGhnSmYJ2vn46ofrJkIEuvpdchMXMX0Jns&usqp=CAU'
    },
    {
      name: 'Brian Allen',
      submittedOn: '1/3/2024',
      duration: '3 Weeks (3/10/2022 - 14/4/2023)',
      salary: 1000 ,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwBG16g5gXPv-feovdsvCGdJYt8UxQmanAwWeeGIpy2Xd03gtq9rKfSZVMP98EtC10Jhs&usqp=CAU'
    },
    {
      name: 'William Johnson',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: 260 ,
      img: 'https://img.freepik.com/premium-photo/man-suit-stands-front-window_662214-572792.jpg?w=360'
    }
  ];

  getVacationRequests(): VacationRequest[] {
    return this.vacationRequests;
  }

  getFilteredRequests(searchTerm: string): VacationRequest[] {
    return this.vacationRequests.filter((request) =>
      request.name.toUpperCase().includes(searchTerm)
    );
  }
}
