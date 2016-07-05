import {Component} from '@angular/core';

@Component({
    selector:'my-pagination',
    template:`
    <div class="content-pagination text-center">
            <ul class="pagination pagination-sm">
                <li><a href="#">1</a></li>
                <li class="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
            </ul>
        </div>
    `,
    styleUrls:['src/css/content.css']
})

export class PaginationComponent{}