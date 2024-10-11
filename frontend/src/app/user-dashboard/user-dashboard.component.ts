// user-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { ServiceRegistry } from '../service-registry';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  formations: any[] = [];

  constructor(private services: ServiceRegistry) {}

  ngOnInit() {
    this.services.userService.getUserFormations().subscribe(
      // Récupérez et affichez les formations de l'utilisateur
    );
  }
}