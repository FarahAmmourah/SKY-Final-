import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ImageSliderComponent {
  images = [
    {
      src: 'https://movitajuicebar.com/wp-content/uploads/2023/08/Mov-Blog-Dry-Coconut.jpg',
      title: 'Best Spots For A Summer Vacation',
      description: 'Check out these spots where we provide you with a discount code! Type VACATION when inserting the promo code and behold the surprise!'
    },
    {
      src: 'https://movitajuicebar.com/wp-content/uploads/2023/08/Mov-Blog-Dry-Coconut.jpg',
      title: 'Exclusive Offers On Hotels',
      description: 'Find amazing discounts at top hotels with our exclusive summer offers. Limited time only!'
    }
  ];
}
