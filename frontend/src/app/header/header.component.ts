import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import { SellerAuthComponent } from '../pages/seller-auth/seller-auth.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

} 
