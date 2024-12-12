import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule ,MatTableModule, RouterLink , RouterLinkActive  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  displayedColumns: string[] = ['id','content', 'organiser', 'date', 'flyer'];

  // Data source initiale vide
  dataSource: any[] = [];

  // Injecter HttpClient directement dans le constructeur
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Appeler l'API pour récupérer les événements lors de l'initialisation du composant
    this.http.get<any[]>('http://localhost:8000/event_request').subscribe (
      (events) => {
        this.dataSource = events; // Assigner les événements récupérés à la source de données
      },
      (error) => {
        console.error('Erreur lors de la récupération des événements', error);
      }
    );
  }



   
}
