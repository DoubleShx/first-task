import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, search = ''): any {
    if (!search.trim()) {
      return value;
    }
    return value.filter(val => {
      return val.value.toLowerCase().includes(search.toLowerCase());
    });
  }

}
