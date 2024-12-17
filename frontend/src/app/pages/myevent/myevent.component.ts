import { Component } from '@angular/core';

@Component({
  selector: 'app-myevent',
  standalone: true,
  imports: [],
  templateUrl: './myevent.component.html',
  styleUrl: './myevent.component.css'
})
export class MyeventComponent {
  eventList = [
    {
      name: 'Artistic Workshop by John Doe',
      date: 'September 20, 2024',
      description: 'A deep dive into abstract painting, led by the renowned artist John Doe. Attendees had the chance to explore various techniques in creating expressive art using non-traditional materials.',
      flyer: 'assets/events/event1.jpg'
    },
    // Add other event data here...
  ];

  viewDetails() {
    console.log('View event details');
    // You could navigate to a detailed event page or show a modal with more details
  }

}
