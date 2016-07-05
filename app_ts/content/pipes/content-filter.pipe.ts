import { Pipe, PipeTransform } from '@angular/core';
// import { IMovie } from './movie';
import {IContent} from '../../content/content-element';

@Pipe({
    name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

    transform(value: IContent[], filter: string): IContent[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((content: IContent) =>
            content.name.toLocaleLowerCase().search(filter) !== -1) : value;
    }
}
