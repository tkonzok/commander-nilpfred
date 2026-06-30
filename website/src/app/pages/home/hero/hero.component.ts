import { Component, inject } from '@angular/core';
import { ScrollService } from '../../../shared/scroll';
import { sections } from '../../../shared/sections';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
})
export class Hero {
  private readonly scrollService = inject(ScrollService);

  protected readonly sections = sections;

  navigateTo(fragment: string): void {
    this.scrollService.scrollToElement(fragment);
  }
}
