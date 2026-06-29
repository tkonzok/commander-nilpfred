import { Component } from '@angular/core';

export interface Concert {
  date: string;
  venue: string;
  city: string;
  details: string;
  ticketUrl?: string;
}

@Component({
  selector: 'app-termine-section',
  imports: [],
  templateUrl: './termine-section.html',
  styleUrl: './termine-section.scss',
})
export class TermineSection {
  showPast = false;

  upcomingConcerts: Concert[] = [
    {
      date: '03.07.2026',
      venue: 'Langeln Open Air',
      city: 'Langeln',
      details: '',
      ticketUrl: 'https://www.langelnopenair.de/tickets/',
    },
    {
      date: '04.07.2026',
      venue: 'One Louder Festival',
      city: 'Gut Blockshagen bei Kiel',
      details: 'u.a. mit Die Bullen und Pogendroblem',
      ticketUrl: 'https://stok-shop24.de/vorverkauf.php',
    },
    {
      date: '28.08.2026',
      venue: 'Fahrenholz Open Air',
      city: 'Kreis Harburg',
      details: 'u.a. mit empiresteakbuilding',
    },
    {
      date: '14.11.2026',
      venue: 'Inihaus',
      city: 'Bad Oldesloe',
      details: 'mit \u00dcberraschung',
    },
    {
      date: '14.11.2026',
      venue: 'Speicher',
      city: 'Husum',
      details: 'mit Chefdenker und Angora Club',
      ticketUrl: 'https://www.reservix.de/p/reservix/group/526667',
    },
  ];

  pastConcerts: Concert[] = [
    {
      date: '29.05.2026',
      venue: 'Stellwerk',
      city: 'Hamburg',
      details: 'mit The Venga Ois und Jimi Randale',
    },
    {
      date: '23.08.2025',
      venue: 'Wurmloch Festival',
      city: 'Krumstedt',
      details: 'mit Masche 3000, Captain Piff u.v.a.',
    },
    { date: '31.05.2025', venue: 'Krawall am Komposthaufen', city: 'Drage', details: 'mit Sempff' },
    {
      date: '12.04.2024',
      venue: 'Druckluft',
      city: 'Oberhausen',
      details: 'mit Im Taxi Rauchen und Rodi',
    },
  ];
}
