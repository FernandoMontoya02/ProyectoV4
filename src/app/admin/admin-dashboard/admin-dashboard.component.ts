import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  currentSection: string = 'cortes'; // Definir la sección activa por defecto

  setActiveButton(section: string) {
    this.currentSection = section;
  }
}
