
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import AOS from 'aos';    


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 ngOnInit(): void {
    // Initialisation de AOS avec les options
    AOS.init({
      offset: 400,   // Décalage pour le déclenchement des animations
      duration: 600, // Durée des animations en millisecondes
      once: true,    // Animation jouée une seule fois (optionnel)
    });
  }
}
