import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Concert {
  date: string;
  venue: string;
  location: string;
  details?: string;
  url?: string;
}

export interface Download {
  epk: File;
  rider: File;
  bandInfo: File;
  bandInfoShort: File;
  platte1: File;
}

export interface File {
  fileName: string;
  fileSize?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);

  getConcerts(): Observable<Concert[]> {
    return this.http.get<Concert[]>('/data/concerts.json');
  }

  getDownloads(): Observable<Download> {
    return this.http.get<Download>('/data/downloads.json');
  }
}
