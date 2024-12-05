import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: false,
  
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  images: string[] = ['assets/imagenes/nosotros-1.jpg', 'assets/imagenes/nosotros-2.jpg', 'assets/imagenes/nosotros-3.jpg', 'assets/imagenes/nosotros-4.jpg']; // Añade las rutas correctas
  currentIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length; // Cambia de imagen
    }, 3000); // Cambia cada 3 segundos
  }
}
