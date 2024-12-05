import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service/admin-service.service';
import { Corte } from '../models/corte.model';

@Component({
  selector: 'app-admin-cortes',
  standalone: false,
  
  templateUrl: './admin-cortes.component.html',
  styleUrl: './admin-cortes.component.css'
})
export class AdminCortesComponent {
  cortes: Corte[] = [];
  nuevoCorte: Corte = { id: 0, nombre: '', precio: 0, descripcion: '' };
  displayedColumns: string[] = ['nombre', 'precio', 'acciones'];

  constructor(private adminService: AdminServiceService) {
    this.cortes = this.adminService.getCortes();
  }

  addCorte() {
    this.adminService.addCorte(this.nuevoCorte);
    this.nuevoCorte = { id: 0, nombre: '', precio: 0, descripcion: '' };
    this.cortes = this.adminService.getCortes();
  }

  deleteCorte(id: number) {
    this.adminService.deleteCorte(id);
    this.cortes = this.adminService.getCortes();
  }
}
