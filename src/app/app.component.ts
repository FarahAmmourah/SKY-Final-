import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ImageSliderComponent } from './components/shared/image-slider/image-slider.component';
import { SharedCardComponent } from "./components/shared/shared-card/shared-card.component";
import { employeeRequestComponent } from './components/employee/employee-request/employee-request.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ImageSliderComponent, SharedCardComponent, employeeRequestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'skyfinal';
}
