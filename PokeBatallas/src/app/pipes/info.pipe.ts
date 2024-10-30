import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'info'
})
export class InfoPipe implements PipeTransform {
  transform(value: any, type: string): string {

    switch (type) {
      case 'height':
        return `${value / 10} m`; 
      case 'weight':
        return `${value / 10} kg`;
      default:
        return value;
    }
  }
}