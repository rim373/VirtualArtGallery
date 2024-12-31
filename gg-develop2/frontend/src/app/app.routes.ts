import { Routes } from '@angular/router';
import { SellerAuthComponent } from './pages/seller-auth/seller-auth.component';
import { HomeComponent } from './pages/home/home.component';
import { MyeventComponent } from './pages/myevent/myevent.component';
import { EventsComponent } from './pages/events/events.component';
import { GaleriesComponent } from './pages/galeries/galeries.component';
import { OurPartnersComponent } from './pages/our-partners/our-partners.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './guard/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';

import { PastEventComponent } from './pages/past-event/past-event.component';
import { CurrentEventComponent } from './pages/current-event/current-event.component';
import { PastGalleryComponent } from './pages/past-gallery/past-gallery.component';
import { CurrentGalleryComponent } from './pages/current-gallery/current-gallery.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



export const routes: Routes = [
    {
        path:'',
        redirectTo :'Home', 
        pathMatch:'full'
    },
    
    
    {
        path:'login',
        component : LoginComponent
    },
    {
        path:'past-event',
        component : PastEventComponent
    },
    {
        path:'past-gallery',
        component : PastGalleryComponent
    },
    
    {
        path:'current-gallery',
        component : CurrentGalleryComponent
    },
    {
        path:'current-event',
        component : CurrentEventComponent
    },
    
    {
        path:'',
        component : LayoutComponent,
        children: [
            {
                path : 'profile',
                component:ProfileComponent,
                canActivate :[authGuard]
                
            
            },
            {
            
                path:'dashboard',
                component : DashboardComponent,
                canActivate :[authGuard]
            }
        ]
            
    },
    {
        path:'Home',
        component : HomeComponent,
    },
    {
        path:'Events',
        component: EventsComponent,
    },
    {
        path:'Galeries',
        component: GaleriesComponent,
    },
    {
        path:'Our-Partners',
        component: OurPartnersComponent,
    },
    {
        path:'seller-auth-component',
        component: SellerAuthComponent,
    },
    {
        path:'Contact',
        component: ContactComponent,
    },
    
    {
        path:'myevents',
        component: MyeventComponent,
    },
    
];
