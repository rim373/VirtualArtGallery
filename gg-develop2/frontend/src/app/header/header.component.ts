import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import { SellerAuthComponent } from '../pages/seller-auth/seller-auth.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService){}
  ngOnInit() {
    console.log(this.authService.isAdmin); // Access the shared boolean
  }

} 
