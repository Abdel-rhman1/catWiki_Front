import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToNumber'
})
export class ConvertToNumberPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return 5 - parseInt(value);
  }

}
