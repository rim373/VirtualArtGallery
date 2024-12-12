import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


interface CarouselItem {
  index: number;
  imageUrl: string;
  link: string;
  alt: string;
}


@Component({
  selector: 'app-galeries',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './galeries.component.html',
  styleUrl: './galeries.component.css'
})
export class GaleriesComponent {
  

}
