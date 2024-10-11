import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.css'
})
export class PagerComponent {
currentPage: any;

}
