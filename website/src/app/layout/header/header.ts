import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { ScrollService } from '../../shared/scroll';
import { sections } from '../../shared/sections';

@Component({
  selector: 'app-header',
  imports: [NgClass, RouterLink],
  templateUrl: './header.html',
})
export class Header {
  private readonly router = inject(Router);
  private readonly scrollService = inject(ScrollService);

  protected readonly menuOpen = signal(false);
  protected readonly isStartScreen = computed(() => !this.isScrolled() && this.isHomePage());

  protected readonly sections = sections;

  private readonly isScrolled = signal(false);
  private readonly isHomePage = signal(true);

  constructor() {
    this.isHomePage.set(this.router.url === '/');

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = (event as NavigationEnd).urlAfterRedirects;
        this.isHomePage.set(url === '/');
        if (url !== '/') {
          this.isScrolled.set(false);
        }
      });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY >= window.innerHeight * 0.85);
  }

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  navigateTo(fragment: string): void {
    this.closeMenu();

    if (this.isHomePage()) {
      this.scrollService.scrollToElement(fragment);
      return;
    }

    void this.router.navigate(['/'], { fragment });
  }
}
