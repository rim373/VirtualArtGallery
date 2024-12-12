import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:any={
    "Mail": "",
    "pwd": ""
  };

  http = inject(HttpClient);

  constructor(private router:Router){

  }

  onLogin() {
    this.http.post("http://localhost:8000/Login", this.loginObj, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(
      (res: any) => {
        console.log('Réponse du serveur:', res); // Afficher la réponse complète pour inspection
        
        // Vérifier si la connexion est réussie
        if (res && res.result === true) {
          alert("Login Success");
  
          // Vérifier l'attribut IsAdmin et rediriger en fonction de cela
          if (res.data && res.data.IsAdmin === true) {
            // Si l'utilisateur est un administrateur, rediriger vers le Dashboard
            this.router.navigateByUrl("dashboard");
          } else {
            // Par défaut, rediriger vers la page d'accueil
            this.router.navigateByUrl("Home");
          }
  
          // Enregistrer l'utilisateur dans le localStorage pour la gestion de session
          localStorage.setItem("angular18Login", this.loginObj.Mail);
        } else {
          // Si la connexion échoue, afficher un message d'erreur spécifique
          alert(res.message || "Check User or Password");
        }
      },
      (error) => {
        console.error("Erreur lors de la connexion", error);
        // Afficher un message d'erreur en cas de problème avec la requête
        alert("Une erreur s'est produite : " + (error.error?.message || error.message));
      }
    );
  }
}
