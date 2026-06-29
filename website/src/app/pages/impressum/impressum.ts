import { Component, AfterViewInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollService } from '../../shared/scroll';

@Component({
  selector: 'app-impressum',
  imports: [],
  templateUrl: './impressum.html',
})
export class Impressum implements AfterViewInit {
  private readonly route = inject<ActivatedRoute>(ActivatedRoute);
  private readonly scrollService = inject<ScrollService>(ScrollService);

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollService.scrollToElement(fragment);
      }
    });
  }
}
