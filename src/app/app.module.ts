import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TratamientosFacialesComponent } from './tratamientos-faciales/tratamientos-faciales.component';
import { BarberiaPeluqueriaComponent } from './barberia-peluqueria/barberia-peluqueria.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminCortesComponent } from './admin/admin-cortes/admin-cortes.component';
import { AdminTratamientosComponent } from './admin/admin-tratamientos/admin-tratamientos.component';
import { AdminClientesComponent } from './admin/admin-clientes/admin-clientes.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    GalleryComponent,
    NavbarComponent,
    ServicesComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    TratamientosFacialesComponent,
    BarberiaPeluqueriaComponent,
    AdminDashboardComponent,
    AdminCortesComponent,
    AdminTratamientosComponent,
    AdminClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
