import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { DataService, Download } from '../../../shared/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-band-section',
  imports: [AsyncPipe],
  templateUrl: './band-section.html',
})
export class BandSection {
  private readonly dataService = inject(DataService);
  protected readonly downloads$: Observable<Download> = this.dataService.getDownloads();
}
