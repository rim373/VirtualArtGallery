import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-current-event',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './current-event.component.html',
  styleUrl: './current-event.component.css'
})
export class CurrentEventComponent {

}
