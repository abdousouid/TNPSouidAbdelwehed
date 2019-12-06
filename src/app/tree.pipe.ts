import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tree'
})
export class TreePipe implements PipeTransform {

  transform(Libelle: string, ...args: any[]): string {
    return '"'+Libelle.toLocaleUpperCase()+'"'  ;
  }

}
