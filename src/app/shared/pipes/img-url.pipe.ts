import { Pipe, PipeTransform } from '@angular/core';
import { BASE_URL } from '../constants';

@Pipe({
  name: 'imgUrl',
  standalone: true,
})
export class ImgUrlPipe implements PipeTransform {
  transform(value: string | null): string | null {
    if (!value) return null;
    return `${BASE_URL}${value}`;
  }
}
