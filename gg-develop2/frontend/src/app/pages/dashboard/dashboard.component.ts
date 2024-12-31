import { Component, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { EventService } from '../../service/event.service';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule ,MatTableModule, RouterLink , RouterLinkActive,FormsModule,CommonModule  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private eventService: EventService,private http: HttpClient) {}

  deleteEvent(eventId: number): void {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventService.deleteEvent(eventId).subscribe({
        next: (response) => {
          console.log('Event deleted:', response);
          alert('Event deleted successfully!');
        },
        error: (error) => {
          console.error('Error deleting event:', error);
          alert('Failed to delete the event.');
        }
      });
    }
  }








  contactObj:any={
    "Content": "",
    "Organiser": "",
    "Date": "",
    "Flyer": ""
    };




  displayedColumns: any[] = ['id','content', 'organiser', 'date', 'flyer','Update','Delate'];

  // Data source initiale vide
  dataSource: any[] = [];

  // Injecter HttpClient directement dans le constructeur
  
  
  onEdit(data : any){
    this.contactObj=data;
  }

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

    //modal
    showModal1 = signal<boolean>(false); // État de la modale
    selectedEventId: number | null = null; // To track which event is being updated

    openModal1(eventId: number): void {
      this.selectedEventId = eventId;

      this.showModal1.set(true);
    }

    closeModal1(): void {
      this.showModal1.set(false);
      this.selectedEventId = null;
    }

    onSubmit1(formData: any): void {
      if (this.selectedEventId !== null) {
        // Call the service to update the event
        this.eventService.updateEvent(this.selectedEventId, formData).subscribe({
          next: (response) => {
            console.log('Event updated successfully:', response);
            this.closeModal1(); // Close the modal after a successful update
          },
          error: (error) => {
            console.error('Error updating event:', error);
          }
        });
      } else {
        console.error('No event selected for updating');
      }
    }


   
}
