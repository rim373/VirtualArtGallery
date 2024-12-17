import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-current-gallery',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './current-gallery.component.html',
  styleUrl: './current-gallery.component.css'
})
export class CurrentGalleryComponent implements OnInit {
  chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = document.getElementById('attendanceChart') as HTMLCanvasElement;
    
    this.chart = new Chart(ctx, {
      type: 'bar', // You can change this to 'line' or 'pie' based on your preference
      data: {
        labels: ['John', 'Jane', 'Jack', 'Jill'], // This would be dynamically populated with attendee names
        datasets: [{
          label: 'Feedback Rating (out of 5)',
          data: [4, 5, 3, 4], // Feedback ratings
          backgroundColor: 'rgba(99, 132, 255, 0.6)', // Color for bars
          borderColor: 'rgba(99, 132, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
