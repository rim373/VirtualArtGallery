import { Component, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms'; 





@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule ,MatTableModule, RouterLink , RouterLinkActive,FormsModule,CommonModule  ],
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


  //modal
    showModal = signal<boolean>(false); // État de la modale
    openModal(): void {
      this.showModal.set(true);
    }
  
    closeModal(): void {
      this.showModal.set(false);
    }
  
    onSubmit(formData: any): void {
      console.log('Form data:', formData);
      this.closeModal(); 
    }



   
}
