import { Component, inject } from '@angular/core';
import { ScrollService } from '../../../shared/scroll';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
})
export class Hero {
  private readonly scrollService = inject(ScrollService);

  navigateTo(fragment: string): void {
    this.scrollService.scrollToElement(fragment);
  }
}
