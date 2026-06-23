import { Component } from '@angular/core';
import { Masthead } from './masthead/masthead';
import { MusikSection } from './musik-section/musik-section';
import { BandSection } from './band-section/band-section';
import { TermineSection } from './termine-section/termine-section';
import { BookingSection } from './booking-section/booking-section';

@Component({
  selector: 'app-home',
  imports: [Masthead, MusikSection, BandSection, TermineSection, BookingSection],
  template: `
    <app-masthead />
    <app-musik-section />
    <app-band-section />
    <app-termine-section />
    <app-booking-section />
  `
})
export class Home {}
