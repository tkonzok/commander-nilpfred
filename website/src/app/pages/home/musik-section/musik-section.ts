import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-musik-section',
  imports: [],
  templateUrl: './musik-section.html',
  styleUrl: './musik-section.scss'
})
export class MusikSection {
  odesliUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.odesliUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2Fi%2F1587016663&theme=light'
    );
  }
}
