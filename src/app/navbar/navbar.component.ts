import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(`ScrollY: ${window.scrollY}`); // Imprime el valor de scroll
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) { // Aplica el cambio al hacer scroll de 50px o más
      navbar?.classList.add('navbar-scrolled');
    } else {
      navbar?.classList.remove('navbar-scrolled');
    }
  }
}
