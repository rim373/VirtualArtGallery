import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-current-gallery',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './current-gallery.component.html',
  styleUrl: './current-gallery.component.css'
})
export class CurrentGalleryComponent {

}
