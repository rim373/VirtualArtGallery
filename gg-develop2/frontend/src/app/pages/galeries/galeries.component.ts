import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Component, AfterViewInit, signal } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

interface CarouselItem {
  index: number;
  imageUrl: string;
  link: string;
  alt: string;
}


@Component({
  selector: 'app-galeries',
  standalone: true,
  imports: [FormsModule,RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './galeries.component.html',
  styleUrl: './galeries.component.css'
})

export class GaleriesComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // Initialize ScrollReveal after the view is initialized
    this.initScrollReveal();
    this.initLightbox();
  }

  private initScrollReveal(): void {
    ScrollReveal({ distance: '50px' });

    ScrollReveal().reveal('.title', {
      delay: 200,
      easing: 'ease-in',
      origin: 'top',
      distance: '70px',
      duration: 900,
    });

    ScrollReveal().reveal('.description', {
      delay: 1000,
      easing: 'ease-in',
      origin: 'top',
      distance: '30px',
      duration: 1000,
    });

    ScrollReveal().reveal('.btn', {
      delay: 2000,
      easing: 'ease-in-out',
      duration: 1000,
    });

    ScrollReveal().reveal('.card-container', {
      delay: 400,
      easing: 'ease-in-out',
      origin: 'right',
      distance: '800px',
      duration: 2500,
    });

    ScrollReveal().reveal('.gradient-line', {
      delay: 200,
      easing: 'ease',
      origin: 'left',
      distance: '1800px',
      duration: 3600,
    });

    ScrollReveal().reveal('.featured-title', {
      delay: 400,
      easing: 'ease-in',
      origin: 'right',
      distance: '200px',
      duration: 1400,
    });

    ScrollReveal().reveal('.item', {
      delay: 1200,
      interval: 200,
      origin: 'bottom',
      easing: 'ease-in-out',
      duration: 400,
    });
  }

  private initLightbox(): void {
    const galleryImages = document.querySelectorAll('.item img') as NodeListOf<HTMLImageElement>;
    const lightbox = document.querySelector('.lightbox') as HTMLElement;
    const lightboxImage = document.querySelector('.img-container img') as HTMLImageElement;
    const lightboxTitle = document.querySelector('.img-container p') as HTMLElement;
    const prevBtn = document.querySelector('.prev') as HTMLElement;
    const nextBtn = document.querySelector('.next') as HTMLElement;
    const body = document.querySelector('body') as HTMLElement;

    let currentIndex: number;

    galleryImages.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        this.updateLightbox(currentIndex, galleryImages, lightboxImage, lightboxTitle);
        lightbox.style.display = 'flex';
        body.classList.add('prevent-background-scroll');
      });
    });

    lightbox.addEventListener('click', (e: Event) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
        body.classList.remove('prevent-background-scroll');
      }
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      this.updateLightbox(currentIndex, galleryImages, lightboxImage, lightboxTitle);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      this.updateLightbox(currentIndex, galleryImages, lightboxImage, lightboxTitle);
    });
  }

  private updateLightbox(index: number, galleryImages: NodeListOf<HTMLImageElement>, lightboxImage: HTMLImageElement, lightboxTitle: HTMLElement): void {
    const currentImage = galleryImages[index];
    lightboxImage.src = currentImage.src;
    lightboxTitle.textContent = currentImage.alt;
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



