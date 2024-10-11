// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceRegistry } from '../service-registry';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private services: ServiceRegistry, private router: Router) {}

  login() {
    this.services.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Redirigez l'utilisateur vers le tableau de bord approprié
        if (response.isAdmin) {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/user-dashboard']);
        }
      },
      (error) => {
        console.error('Erreur de connexion:', error);
        this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
      }
    );
  }
}