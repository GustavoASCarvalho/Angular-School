import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const splt = value.split('');
    const phone = `(${splt[0]}${splt[1]}) ${splt[2]}${splt[3]}${splt[4]}${splt[5]}${splt[6]}-${splt[7]}${splt[8]}${splt[9]}${splt[10]}`;
    return phone;
  }
}
