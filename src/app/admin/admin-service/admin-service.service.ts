import { Injectable } from '@angular/core';
import { Corte } from '../models/corte.model';
import { Tratamiento } from '../models/tratamiento.model';
import { Cliente } from '../models/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private cortes: Corte[] = [];
  private tratamientos: Tratamiento[] = [];
  private clientes: Cliente[] = [];

  // Cortes
  getCortes(): Corte[] {
    return this.cortes;
  }

  addCorte(corte: Corte) {
    this.cortes.push({ ...corte, id: Date.now() });
  }

  deleteCorte(id: number) {
    this.cortes = this.cortes.filter(c => c.id !== id);
  }

  // Tratamientos
  getTratamientos(): Tratamiento[] {
    return this.tratamientos;
  }

  addTratamiento(tratamiento: Tratamiento) {
    this.tratamientos.push({ ...tratamiento, id: Date.now() });
  }

  deleteTratamiento(id: number) {
    this.tratamientos = this.tratamientos.filter(t => t.id !== id);
  }

  // Clientes
  getClientes(): Cliente[] {
    return this.clientes;
  }

  addCliente(cliente: Cliente) {
    this.clientes.push({ ...cliente, id: Date.now() });
  }

  deleteCliente(id: number) {
    this.clientes = this.clientes.filter(c => c.id !== id);
  }
}
