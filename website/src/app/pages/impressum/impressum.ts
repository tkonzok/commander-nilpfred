import { Component, AfterViewInit, inject, OnInit, DOCUMENT } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollService } from '../../shared/scroll';

@Component({
  selector: 'app-impressum',
  imports: [],
  templateUrl: './impressum.html',
})
export class Impressum implements OnInit, AfterViewInit {
  private readonly route = inject<ActivatedRoute>(ActivatedRoute);
  private readonly scrollService = inject<ScrollService>(ScrollService);
  private doc = inject(DOCUMENT);

  ngOnInit(): void {
    this.setCanonical('https://www.cbernardy.de/nilpfred/impressum/');
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollService.scrollToElement(fragment);
      }
    });
  }

  private setCanonical(url: string): void {
    let link: HTMLLinkElement =
      this.doc.querySelector('link[rel="canonical"]') || this.doc.createElement('link');

    link.setAttribute('rel', 'canonical');

    link.setAttribute('href', url);

    this.doc.head.appendChild(link);
  }
}
