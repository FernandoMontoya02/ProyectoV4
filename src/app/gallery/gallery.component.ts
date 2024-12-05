import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  selectedImage: { imageUrl: string; title: string; price: string; description: string; duration: string } | null =
    null;

  openModal(imageDetails: {
    imageUrl: string;
    title: string;
    price: string;
    description: string;
    duration: string;
  }): void {
    this.selectedImage = imageDetails;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}
