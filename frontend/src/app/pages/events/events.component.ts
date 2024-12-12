import { Component, OnInit, inject, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponseModel, EventList } from '../../model/event';
import { FormsModule } from '@angular/forms'; 
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  imports: [FormsModule,RouterLink, RouterLinkActive,CommonModule],
})
export class EventsComponent implements OnInit {
  eventList = signal<EventList[]>([]); //m
  
  
  
    
   // Injecter HttpClient directement dans le constructeur
  constructor(private http: HttpClient) {}
   

  items: any[] = [];
  masterService = inject(MasterService);

  loadAllEvent(): void {
    this.masterService.getAllEvent().subscribe(
      (res: any) => {
        console.log('API Response:', res); // Log the API response
        if (Array.isArray(res)) {
          this.eventList.set(res);  // Directly set the array to the event list signal
          console.log('Updated Event List:', this.eventList());  // Log the updated event list
        } else {
          console.error('Data is not an array or is missing', res);
        }
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
  

  
    // Data source initiale vide
    
    ngOnInit(): void {
     // Appeler l'API pour récupérer les événements lors de l'initialisation du composant
     this.loadAllEvent();

     
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