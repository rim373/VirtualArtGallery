import { Component,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,RouterLink, RouterLinkActive],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactObj:any={
  "Content": "",
  "Organiser": "",
  "Date": "",
  "Flyer": ""
  };

  http = inject(HttpClient);

  constructor(private router:Router){

  }

  onContact() {
    
    // Envoyer les données de l'événement au serveur via POST
    this.http.post("http://127.0.0.1:8000/Event", this.contactObj).subscribe(
      (res: any) => {
        
        console.log("Response from server:", res);
        alert(res.message);
  
        if (res && res.result === true)  {
          // Si la réponse est valide, enregistrer les nouvelles données dans le localStorage
          let storedEvents = JSON.parse(localStorage.getItem('eventData') || '[]');
          storedEvents.push(res.data); // Ajouter le nouvel événement à la liste existante
          localStorage.setItem("eventData", JSON.stringify(storedEvents));
  
          // Rediriger vers le tableau de bord
          this.router.navigate(['/dashboard']);
        }
      },
      (error) => {
        // Gérer les erreurs du serveur ou de réseau
        console.error("Error:", error);
        
      }
    );
  }

}
