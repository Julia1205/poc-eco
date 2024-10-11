// admin-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { ServiceRegistry } from '../service-registry';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  stats: any[] = [];

  constructor(private services: ServiceRegistry) {}

  ngOnInit() {
    this.services.formationService.getFormationStats().subscribe(
      // Récupérez et affichez les statistiques des formations
    );
  }
}