import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgUrl',
  standalone: true,
})
export class ImgUrlPipe implements PipeTransform {
  url = 'https://icherniakov.ru/yt-course/';

  transform(value: string | null): string | null {
    if (!value) return null;
    return `${this.url}${value}`;
  }
}
