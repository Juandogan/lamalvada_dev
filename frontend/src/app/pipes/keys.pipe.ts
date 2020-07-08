import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
    
        transform(value: any[], args: any[] = null): any {
        
         var resultado

           resultado = Object.keys(value).map(key => value[key]);
         console.log(resultado)
           resultado =  resultado.slice(0,-17)
         

            return resultado 
        }
   }