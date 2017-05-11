import {Component, Input} from '@angular/core';

@Component({
    selector: 'droparea',
    styleUrls: ["./droparea.component.css"],
    templateUrl: "./droparea.component.html"
})
export class DropareaComponent {

    @Input() infotext: string;
    @Input() iconClassByType: Function;

    displayItems: any[] = [];

    constructor() {}


    onDrop(event) {
        this.displayItems.push(event.model);
    }

    remove(element) {
        this.displayItems.splice(this.displayItems.indexOf(element), 1);
    }

}