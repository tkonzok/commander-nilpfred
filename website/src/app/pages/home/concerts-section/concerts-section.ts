import { Component, inject, OnInit, signal } from '@angular/core';
import { Concert, DataService } from '../../../shared/data.service';
import { take, tap } from 'rxjs';
import { ConcertDatePipe } from '../../../shared/date.pipe';

export interface PastAndUpcomingConcerts {
  past: Concert[];
  upcoming: Concert[];
}

@Component({
  selector: 'app-concerts-section',
  imports: [ConcertDatePipe],
  templateUrl: './concerts-section.html',
})
export class ConcertsSection implements OnInit {
  private readonly dataService = inject(DataService);
  protected pastConcerts = signal<Concert[]>([]);
  protected upcomingConcerts = signal<Concert[]>([]);
  protected showPast = false;

  ngOnInit() {
    this.dataService
      .getConcerts()
      .pipe(
        take(1),
        tap((concerts) => {
          const sorted = this.sortConcerts(concerts);
          this.pastConcerts.set(sorted.past);
          this.upcomingConcerts.set(sorted.upcoming);
        }),
      )
      .subscribe();
  }

  private sortConcerts(concerts: Concert[]): PastAndUpcomingConcerts {
    const today = new Date().toISOString().substring(0, 10);
    const past: Concert[] = [];
    const upcoming: Concert[] = [];

    for (const c of concerts) {
      if (c.date < today) {
        past.push(c);
      } else {
        upcoming.push(c);
      }
    }
    past.sort((a, b) => b.date.localeCompare(a.date));
    upcoming.sort((a, b) => a.date.localeCompare(b.date));
    return { past, upcoming };
  }
}
