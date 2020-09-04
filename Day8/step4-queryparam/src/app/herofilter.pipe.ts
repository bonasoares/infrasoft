import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name : 'herofilter'
})
export class HeroPipe implements PipeTransform{
    transform(list, ...arg){
        if( arg.length <= 0 ){
            return list
        }else{
            return list.filter(function(hero){
                    return hero['name']
                                    .toLowerCase()
                                    .includes(arg[0]+"".toLowerCase())
            })
        }
    }
}