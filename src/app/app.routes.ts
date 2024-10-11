import { Routes } from '@angular/router';
import { EmployeeHomeComponent } from './components/employee/employee-home/employee-home.component';
import { EmployeeProfileComponent } from './components/employee/employee-profile/employee-profile.component';
import { employeeRequestComponent } from './components/employee/employee-request/employee-request.component';
import { PageComponent } from './components/employee/employee-request/employee-page.component';
import { PagethreeComponent } from './components/employee/employee-request/employee-pagethree.component';

export const appRoutes: Routes = [
  { path: 'employee-home', component: EmployeeHomeComponent },
  { path: 'employee-profile', component: EmployeeProfileComponent },
  { path: 'employee-requests', component: employeeRequestComponent },
  { path: 'pagetwo',component:PageComponent},
  { path: 'pagethree',component:PagethreeComponent},
  { path: '', redirectTo: '/employee-home', pathMatch: 'full' },
];
