import { Pipe, PipeTransform } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { de } from 'date-fns/locale';

@Pipe({
  name: 'concertDate',
  standalone: true,
})
export class ConcertDatePipe implements PipeTransform {
  transform(value: string | Date): string {
    if (!value) return '';
    const date = typeof value === 'string' ? parseISO(value) : value;
    return format(date, 'EEEE, dd.MM.yyyy', { locale: de });
  }
}
