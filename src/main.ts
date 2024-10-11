import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { employeeRequestComponent } from './app/components/employee/employee-request/employee-request.component';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(employeeRequestComponent)
  .catch((err) => console.error(err));
