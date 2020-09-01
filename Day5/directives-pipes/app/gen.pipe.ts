import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
 name : 'gen'
})
export class GenPipe implements PipeTransform{
  transform( arg: string, arg2: string): string{
    if( arg2 === 'male' ){
      return 'Mr ' + arg;
    }else{
      return 'Miss ' + arg;
    }
  }
}
