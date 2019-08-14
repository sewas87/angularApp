import {Pipe, PipeTransform} from '@angular/core';

// @ts-ignore
@Pipe({
    name: 'join',//pure
    pure: false//inpure
})
export class JoinPipe implements PipeTransform {
    transform(arry: any, start?: any, end?: any ): any {
        let result = arry;
        if (start !== undefined) {
            if (end !== undefined ) {
                result = arry.slice(start, end);
            } else {
                result = arry.slice(start, arry.lenght);
            }
        }
        return result.join(', ');
    }

}
