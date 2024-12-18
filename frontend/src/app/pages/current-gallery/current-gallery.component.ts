import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import AOS from 'aos'; 

@Component({
  selector: 'app-current-gallery',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './current-gallery.component.html',
  styleUrl: './current-gallery.component.css'
})

export class CurrentGalleryComponent implements OnInit {

  ngOnInit(): void {
    // Initialisation de AOS avec les options
    AOS.init({
      offset: 400,   // Décalage pour le déclenchement des animations
      duration: 600, // Durée des animations en millisecondes
      once: true,    // Animation jouée une seule fois (optionnel)
    });
  }
}
