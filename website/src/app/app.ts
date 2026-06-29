import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { ContactCards } from './layout/contact-cards/contact-cards';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, ContactCards, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
