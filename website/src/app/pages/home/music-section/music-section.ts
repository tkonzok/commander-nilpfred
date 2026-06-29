import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AsyncPipe } from '@angular/common';
import { DataService, Download } from '../../../shared/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music-section',
  imports: [AsyncPipe],
  templateUrl: './music-section.html',
})
export class MusicSection {
  private readonly dataService = inject(DataService);
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly downloads$: Observable<Download> = this.dataService.getDownloads();
  protected readonly odesliUrl: SafeResourceUrl;

  constructor() {
    this.odesliUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2Fi%2F1587016663&theme=light',
    );
  }
}
