import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ScrollService } from '../../shared/scroll';
@Component({
  selector: 'app-navbar',
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isScrolled = false;
  menuOpen = false;
  constructor(private router: Router, private scrollService: ScrollService) {}
  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu(): void {
    this.menuOpen = false;
  }
  navigateTo(fragment: string): void {
    this.closeMenu();
    if (this.router.url === '/' || this.router.url === '') {
      this.scrollService.scrollToElement(fragment);
    } else {
      this.router.navigate(['/'], { fragment });
    }
  }
}
