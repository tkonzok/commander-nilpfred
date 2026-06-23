import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { ContactCards } from './layout/contact-cards/contact-cards';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ContactCards],
  template: `
    <app-navbar />
    <main>
      <router-outlet />
    </main>
    <app-contact-cards />
    <app-footer />
  `,
  styleUrl: './app.scss'
})
export class App {}
