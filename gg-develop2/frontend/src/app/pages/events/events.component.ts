import { Component, OnInit, inject, signal  } from '@angular/core';
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


  currentIndex = 0; // Tracks the currently displayed event
  autoScrollInterval: any; // Interval ID for auto-scrolling


   // Navigate to the previous event
   prevSlide(): void {
    this.currentIndex = this.currentIndex === 0 ? this.eventList.length - 1 : this.currentIndex - 1;
  }
  // Navigate to the next event
  nextSlide(): void {
    this.currentIndex = this.currentIndex === this.eventList.length - 1 ? 0 : this.currentIndex + 1;
  }
   // Set the current index based on the clicked dot
   setCurrentIndex(index: number): void {
    this.currentIndex = index;
  }
  // Automatically scroll the carousel every 5 seconds
  startAutoScroll() {
    setInterval(() => {
      this.nextSlide();  // Move to the next slide
    }, 5000);  // Change the interval as needed (5000 ms = 5 seconds)
  }


  // Automatically scroll back to the first item after reaching the last item
  scrollToFirstItemIfLast() {
    if (this.currentIndex === this.eventList().length - 1) {
      this.currentIndex = 0;  // Reset to first item
    }
  }


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


    
    this.startAutoScroll(); // Start auto-scrolling

     
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