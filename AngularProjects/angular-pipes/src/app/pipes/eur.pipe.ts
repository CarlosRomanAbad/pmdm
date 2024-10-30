import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eur'
})
export class EurPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
