import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { DataService, Download } from '../../../shared/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music-section',
  imports: [AsyncPipe],
  templateUrl: './music-section.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MusicSection {
  private readonly dataService = inject(DataService);
  protected readonly downloads$: Observable<Download> = this.dataService.getDownloads();
}
