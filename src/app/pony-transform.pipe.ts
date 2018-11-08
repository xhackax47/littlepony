import { Pipe, PipeTransform } from '@angular/core';
import { Pony } from './pony';

@Pipe({
  name: 'ponyTransform'
})
export class PonyTransformPipe implements PipeTransform {

  transform(pony: Pony, args?: any): any {
    return '' + pony.id + ' : ' + pony.name;
  }

}
