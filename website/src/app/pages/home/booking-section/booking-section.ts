import { Component, inject } from '@angular/core';
import { DataService, Download } from '../../../shared/data.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-section',
  imports: [AsyncPipe],
  templateUrl: './booking-section.html',
})
export class BookingSection {
  private readonly dataService = inject(DataService);
  protected readonly downloads$: Observable<Download> = this.dataService.getDownloads();
}
