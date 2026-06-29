import { Component } from '@angular/core';
import { Hero } from './hero/hero.component';
import { MusicSection } from './music-section/music-section';
import { BandSection } from './band-section/band-section';
import { ConcertsSection } from './concerts-section/concerts-section';
import { BookingSection } from './booking-section/booking-section';

@Component({
  selector: 'app-home',
  imports: [Hero, MusicSection, BandSection, ConcertsSection, BookingSection],
  templateUrl: './home.html',
})
export class Home {}
