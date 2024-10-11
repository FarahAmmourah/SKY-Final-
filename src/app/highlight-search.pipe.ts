import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch',
  standalone: true
})
export class HighlightSearchPipe implements PipeTransform {

  transform(value: string, search: string): any {
    if (!search) {
      return value;
    }
    const re = new RegExp(search, 'gi');
    return value.replace(re, (match) => `<span class="highlighter">${match}</span>`);
  }
}

